import bcrypt from "bcryptjs";
import dotenv from 'dotenv';

dotenv.config();

// Hashes a string using bcrypt with a generated salt.
export  const hashString=async(imputVal) => {
 const salt = await bcrypt.genSalt(10);

 const hashedString = await bcrypt.hash(imputVal, salt);
 return hashedString;
};

// Compares a user-provided string with a hashed stirng
//  For example - Compares a user-provided password with a hashed password
export const compareString = async (userProvidedString, stringInDB)=>{
    const match = await bcrypt.compare(userProvidedString, stringInDB);
    return match;
}
