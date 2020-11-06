import { getRepository, Repository } from 'typeorm';
import Comment from '@modules/comments/infra/typeorm/entities/Comment';

import ICommentsRepository from '@modules/comments/repositories/ICommentsRepository';
import ICreateCommentDTO from '@modules/comments/dtos/ICreateCommentDTO';

class CommentsRepository implements ICommentsRepository {
  private ormRepository: Repository<Comment>;

  constructor() {
    this.ormRepository = getRepository(Comment);
  }

  public async create(commentData: ICreateCommentDTO): Promise<Comment> {
    const comment = this.ormRepository.create(commentData);

    await this.ormRepository.save(comment);

    return comment;
  }

  public async findAll(): Promise<Comment[]> {
    const comments = await this.ormRepository.find();

    return comments;
  }

  public async findById(id: string): Promise<Comment | undefined> {
    const comment = await this.ormRepository.findOne(id);

    return comment;
  }
}

export default CommentsRepository;
