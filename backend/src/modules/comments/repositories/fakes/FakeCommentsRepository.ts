import { uuid } from 'uuidv4';
import Comment from '@modules/comments/infra/typeorm/entities/Comment';

import ICommentsRepository from '@modules/comments/repositories/ICommentsRepository';
import ICreateCommentDTO from '@modules/comments/dtos/ICreateCommentDTO';

class CommentsRepository implements ICommentsRepository {
  private comments: Comment[] = [];

  public async create(commentData: ICreateCommentDTO): Promise<Comment> {
    const comment = new Comment();

    Object.assign(comment, {
      id: uuid(),
      comment: commentData.comment,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.comments.push(comment);

    return comment;
  }

  public async findAll(): Promise<Comment[]> {
    return this.comments;
  }

  public async findById(id: string): Promise<Comment | undefined> {
    const findComment = this.comments.find(comment => comment.id === id);

    return findComment;
  }
}

export default CommentsRepository;
