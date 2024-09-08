import mongoose, { Schema }  from "mongoose";

const accountShema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true],
        },
        email:{
            type: String,
            required: [true],
        },
        password:{
            type: String,
            required: [true],
        },

    },
    { timestamps: true }
)

const Account = mongoose.model("Account", accountShema);

export default Account;