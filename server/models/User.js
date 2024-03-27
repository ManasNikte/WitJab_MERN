import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    account_type: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}) 

const UserModel = mongoose.model("User", UserSchema)
export { UserModel as User}