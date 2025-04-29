import {Router} from 'express';
import { createWaitlist } from '../controllers/waitlist-controllers.js';
const router = Router();

router.post('/waitlist', createWaitlist);
export default router;