import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ListCommentsService from '@modules/comments/services/ListCommentsService';
import CreateCommentService from '@modules/comments/services/CreateCommentService';

export default class CommentsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listComments = container.resolve(ListCommentsService);

    const comments = await listComments.execute();

    return response.json(comments);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { comment } = request.body;

    const createComment = container.resolve(CreateCommentService);

    const commentCreated = await createComment.execute({ comment });

    return response.json(commentCreated);
  }
}
