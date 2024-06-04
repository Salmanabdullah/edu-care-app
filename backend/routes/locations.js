import express from 'express';
import requireAuth from '../middlewares/requireAuth.js';

const router = express.router();

// require auth for all map routes
router.use(requireAuth)

// location routes all go here

export default router;