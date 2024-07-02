"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFreelanceDetails = exports.base = exports.missionsAirtableRouter = void 0;
const express_1 = require("express");
const airtable_1 = __importDefault(require("airtable"));
const orderMissions_1 = require("../utils/orderMissions");
exports.missionsAirtableRouter = (0, express_1.Router)();
exports.base = new airtable_1.default({
    apiKey: process.env.AIRTABLE_API_KEY,
}).base(process.env.AIRTABLE_BASE_ID || '');
const getFreelanceDetails = (freelanceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const freelanceRecord = yield (0, exports.base)('Freelance').find(freelanceId);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _a = freelanceRecord.fields, { Missions } = _a, freelanceDetailsWithoutMissions = __rest(_a, ["Missions"]);
        return freelanceDetailsWithoutMissions;
    }
    catch (err) {
        console.error(err);
        return {};
    }
});
exports.getFreelanceDetails = getFreelanceDetails;
exports.missionsAirtableRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const missions = yield (0, exports.base)('Missions').select().firstPage();
        const allRecords = yield Promise.all(missions.map((record) => __awaiter(void 0, void 0, void 0, function* () {
            const missionRecord = Object.assign({}, record.fields);
            const freelanceId = record.fields.freelance[0];
            if (freelanceId) {
                missionRecord.freelance = (yield (0, exports.getFreelanceDetails)(freelanceId));
            }
            return missionRecord;
        })));
        const orderedMissionsByStartDate = (0, orderMissions_1.orderMissions)(allRecords, 'beginDate');
        const orderedMissionsByEndDate = (0, orderMissions_1.orderMissions)(allRecords, 'endDate');
        res.status(200).send({
            arrivingBloomers: orderedMissionsByStartDate,
            leavingBloomers: orderedMissionsByEndDate,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Erreur lors de la récupération des données');
    }
}));
