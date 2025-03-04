// import { Items } from "../models/home.model.js"

import { User } from "../models/user.model.js"

// import {User} from "../models/email.model.js"

// export const enterData = async(req,res)=>{
//     try{
//         const { item, category , categoryType } = req.body;

//         if(!item || !category || !categoryType){
//             res.status(400).json({
//                 message : "Please Enter the Data",
//             });
//         }

//         if (!["Cloth", "Electronics"].includes(categoryType)) {
//             return res.status(400).json({ error: "Invalid category type" });
//         }

//         const newUser = Items({
//             item,
//             category,
//             categoryType,
//         });

//         await newUser.save();

//         if(newUser){
//             res.status(200).json({
//                 message : "Data Entered Successfully",
//                 status : 1,
//             })
//         }
//     }catch(err){
//         res.status(200).json({
//             message : "Internal Server Error",
//             status : 0,
//         });
//     }
// }

// export const getItems = async (req, res) => {
//     try {
//         const items = await Items.find().populate("category"); // Populating category

//         res.status(200).json(items);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

export const userController = async (req, res) => {
    try {
        const { username, name, email, password } = req.body

        const user = new User({
            username: username, name: name, email: email, password: password
        })
        await user.save()
        return res.status(200).json({ message: "User Created Successfully", status: 1, user })
    }
    catch (error) { console.log(err); return res.status(500).json({ message: 'internal server error' }) }
}
