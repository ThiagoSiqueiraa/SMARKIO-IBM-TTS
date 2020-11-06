import Comment from '@modules/comments/infra/typeorm/entities/Comment';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import ICreateCommentDTO from '../dtos/ICreateCommentDTO';
import ICommentsRepository from '../repositories/ICommentsRepository';

@injectable()
class CreateCommentService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository
  ) {}

  public async execute({ comment }: ICreateCommentDTO): Promise<Comment> {
    const commentCreated = await this.commentsRepository.create({
      comment,
    });

    return commentCreated;
  }
}

export default CreateCommentService;
