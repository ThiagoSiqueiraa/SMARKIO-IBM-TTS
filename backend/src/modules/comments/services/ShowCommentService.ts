import Comment from '@modules/comments/infra/typeorm/entities/Comment';
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

    return comment;
  }
}

export default ShowCommentService;
