import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/email.model.js";
import { loginUser } from "../controllers/email.controller.js"; // Import the loginUser function

const router = express.Router();

router.post("/register", async (req, res) => {
router.post("/login", loginUser); // Add route for user login

    try {
        const { username, email, password, name } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.status(200).json({
                message: "User already exists",
                status: 0,
            });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name: name,
            username: username,
            email: email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(200).json({
            message: "User Registered Successfully",
            status: "1",
        });

    } catch (err) {
        res.status(500).json({
            message: "Error",
            error: err.message,
        });
    }
});

export default router;
