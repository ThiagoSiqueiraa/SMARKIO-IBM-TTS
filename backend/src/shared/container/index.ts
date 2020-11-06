import { container } from 'tsyringe';

import ICommentsRepository from '@modules/comments/repositories/ICommentsRepository';
import CommentsRepository from '@modules/comments/infra/typeorm/repositories/CommentsRepository';

container.registerSingleton<ICommentsRepository>(
  'CommentsRepository',
  CommentsRepository
);
