import { Router } from 'express';

import commentsRouter from '@modules/comments/infra/http/routes/comments.routes';
import ttsWatsonRouter from '@modules/comments/infra/http/routes/ttswatson.routes';

const routes = Router();

routes.use('/comments', commentsRouter);
routes.use('/tts-watson', ttsWatsonRouter);

export default routes;
