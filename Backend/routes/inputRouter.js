import express from "express";
import {  userController } from "../controllers/user.controller.js";

const inputrouter = express.Router();

inputrouter.post("/post", userController);
// inputrouter.get(S"/get", getItems);

export default inputrouter; // ✅ Ensure this is present
 // ✅ Ensure this is here!
