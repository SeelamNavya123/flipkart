import bcrypt from "bcrypt";
import { User } from "../models/email.model.js";

export const postData = async(req,res) => {
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
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", user });
    } catch (err) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};
