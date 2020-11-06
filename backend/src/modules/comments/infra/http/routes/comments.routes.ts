import { Router } from 'express';
import CommentsController from '../controllers/CommentsController';

const commentsRouter = Router();
const commentsController = new CommentsController();

commentsRouter.get('/', commentsController.index);
commentsRouter.post('/', commentsController.create);

export default commentsRouter;
