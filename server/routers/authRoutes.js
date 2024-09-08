import express from 'express';
import { register, login } from '../controllers/authController.js';
// Express routers
// From Express documentation
// https://expressjs.com/en/guide/routing.html

// Defince that this is a router obj.
const router = express.Router();

//app.get/post/put/delete is changed to 
//router.get/post/put/delete, 
//because it is not in the index.js

//register
router.post("/register", register);

//login
router.post("/login", login);

export default router;