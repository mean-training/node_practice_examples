"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const todoRoutes_1 = __importDefault(require("./server/routes/todoRoutes"));
// Set up the express app
const app = (0, express_1.default)();
// Log requests to the console.
app.use((0, morgan_1.default)('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use('/api/v1/todo', todoRoutes_1.default);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning.',
}));
module.exports = app;
//# sourceMappingURL=app.js.map