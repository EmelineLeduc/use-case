"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.missionsRouter = void 0;
const express_1 = require("express");
const missionsService_1 = require("../services/missionsService");
const orderMissions_1 = require("../utils/orderMissions");
exports.missionsRouter = (0, express_1.Router)();
exports.missionsRouter.get('/', (req, res) => {
    try {
        const missions = (0, missionsService_1.getMissions)();
        if (missions.length === 0) {
            res.status(404).send({ error: 'No missions found.' });
        }
        const orderedMissionsByStartDate = (0, orderMissions_1.orderMissions)(missions, 'beginDate');
        const orderedMissionsByEndDate = (0, orderMissions_1.orderMissions)(missions, 'endDate');
        res.status(200).send({
            arrivingBloomers: orderedMissionsByStartDate,
            leavingBloomers: orderedMissionsByEndDate,
        });
    }
    catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});
