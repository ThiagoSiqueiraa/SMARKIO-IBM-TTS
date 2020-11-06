import Comment from '../infra/typeorm/entities/Comment';
import ICreateCommentDTO from '../dtos/ICreateCommentDTO';
// - findByUser
// - createAndSave
export default interface IUsersRepository {
  create(data: ICreateCommentDTO): Promise<Comment>;
  findAll(): Promise<Comment[]>;
  findById(id: string): Promise<Comment | undefined>;
}
