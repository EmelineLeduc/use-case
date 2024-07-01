'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const missions_1 = require('./routes/missions');
const app = (0, express_1.default)();
const port = 8080;
app.use(express_1.default.json());
app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/missions', missions_1.missionsRouter);
app.listen(port, () => console.info(`Server is running on port ${port}`));
exports.default = app;
