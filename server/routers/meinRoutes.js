import express from 'express';
import authRoutes from './authRoutes.js'

const router = express.Router();

router.use('/account', authRoutes);

export default router;