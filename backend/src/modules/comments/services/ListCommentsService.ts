import Comment from '@modules/comments/infra/typeorm/entities/Comment';
import { injectable, inject } from 'tsyringe';
import ICommentsRepository from '../repositories/ICommentsRepository';

@injectable()
class ListCommentsService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository
  ) {}

  public async execute(): Promise<Comment[]> {
    const comments = await this.commentsRepository.findAll();

    return comments;
  }
}

export default ListCommentsService;
