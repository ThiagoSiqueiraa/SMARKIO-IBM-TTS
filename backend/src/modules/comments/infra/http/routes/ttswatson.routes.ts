import { Router } from 'express';
import TTSWatsonController from '../controllers/TTSWatsonController';

const commentsRouter = Router();
const ttsWatsonController = new TTSWatsonController();

commentsRouter.get('/:id', ttsWatsonController.play);

export default commentsRouter;
