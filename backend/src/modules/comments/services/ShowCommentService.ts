import Comment from '@modules/comments/infra/typeorm/entities/Comment';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ICommentsRepository from '../repositories/ICommentsRepository';

@injectable()
class ShowCommentService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository
  ) {}

  public async execute(id: string): Promise<Comment | undefined> {
    const comment = await this.commentsRepository.findById(id);

    if (!comment) {
      throw new AppError('Comentário não encontrado');
    }

    return comment;
  }
}

export default ShowCommentService;
