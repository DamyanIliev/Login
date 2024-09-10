import Account from "../models/accountModel.js"
import { compareString, hashString } from "../utils/utils.js";

export const register = async (req, res) =>{
    const{name, email, password} = req.body;
    if(name && email && password) {
        try{
            const usedEmail = await Account.findOne({email})
            console.log(usedEmail);
            if(usedEmail) {
                return res.status(401).json({message:"This email address has already been used"});
            }
            const hashPassword = await hashString(password);
            
            const account = await Account.create({
                name, email, password:hashPassword,
            });
            return res.status(200).json({ status: "success",message:"Your account has been created succesfully!"});
        }catch{
            console.log(error);
            res.status(500).json({ message: "An error occurred while registering user." });
        }
    }else{
        return res.status(401).json({message: "Ensure all mandatory fields are completed."})
    }

}

export const login = async (req, res) =>{
    const {email, password} = req.body;
    if(email && password){
        try{ 
            const foundUser = await Account.findOne({email})
            if (foundUser){
                const checkPassword = await compareString(password, foundUser.password)
                if(checkPassword){
                    res.status(200).json({ status: "success", message: "Login Succesful!", foundUser})
                }else{
                    res.status(401).json({message: "Incorect password."})
                }
            }else res.status(401).json({message: "Wrong email."})
        }catch{
            res.status(500).json({message: "An error occurred while logging in."})
        }
    }else{
        res.status(401).json({message:"Please enter all fields"})
    }
}