const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const bodyParser = require('body-parser');


const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
const userRoutes = require('./routes/userRoutes');
const newsFeedsRoutes = require('./routes/newsFeedsRoutes');
const globalErrHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');
const app = express();

// Allow Cross-Origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour'
});
app.use('/api', limiter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Body parser, reading data from body into req.body
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against Nosql query injection
app.use(mongoSanitize());

// Data sanitization against XSS(clean user input from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Routes
app.use('/api/v1', userRoutes)
app.use('/api/v1', newsFeedsRoutes)

// Swagger
let options = {
    swaggerOptions: {
      authAction :{ JWT: {name: "JWT", schema: {type: "apiKey", in: "header", name: "Authorization", description: ""}, value: "Bearer <JWT>"} }
    }
};  
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));

// Handle unexisting routes
app.use('*', (req, res, next) => {
    const err = new AppError(process.env.HTTP_NOT_FOUND_STATUS_CODE, process.env.ERROR_STATUS, 'Route does not exist.');
    next(err, req, res, next);
});

app.use(globalErrHandler);

module.exports = app;