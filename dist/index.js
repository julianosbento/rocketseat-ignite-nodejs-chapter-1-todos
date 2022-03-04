"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { v4: uuidv4 } from 'uuid';
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// const users = [];
function checksExistsUserAccount() {
    // Complete aqui
}
app.post('/users', (request, response) => {
    // Complete aqui
});
app.get('/todos', checksExistsUserAccount, (request, response) => {
    // Complete aqui
});
app.post('/todos', checksExistsUserAccount, (request, response) => {
    // Complete aqui
});
app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
    // Complete aqui
});
app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
    // Complete aqui
});
app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
    // Complete aqui
});
exports.default = app;
