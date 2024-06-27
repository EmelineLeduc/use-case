"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missionsRouter = void 0;
const express_1 = require("express");
const missionsService_1 = require("../services/missionsService");
exports.missionsRouter = (0, express_1.Router)();
exports.missionsRouter.get('/', (req, res) => {
    const missions = (0, missionsService_1.getMissions)();
    res.send(missions);
});
