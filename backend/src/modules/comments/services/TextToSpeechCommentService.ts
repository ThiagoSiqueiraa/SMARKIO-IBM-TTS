import Comment from '@modules/comments/infra/typeorm/entities/Comment';
import AppError from '@shared/errors/AppError';
import { injectable, inject } from 'tsyringe';
import IBMTTS from '@config/IBMTTS';
import ICommentsRepository from '../repositories/ICommentsRepository';

@injectable()
class TextToSpeechCommentService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository
  ) {}

  public async execute(comment: Comment): Promise<any> {
    const commentSpeech = new IBMTTS();

    const getBuffer = () =>
      commentSpeech
        .synthesize(comment.comment, 'pt-BR_IsabelaV3Voice')
        .then(buffer => {
          return { type: 'Buffer', data: buffer };
        })
        .catch(err => {
          throw new AppError('Erro ao executar o serviço da IBM');
        });

    const buffer = getBuffer();

    if (!buffer) {
      throw new AppError('Algum erro aconteceu ao reproduzir o áudio');
    }

    return buffer;
  }
}

export default TextToSpeechCommentService;
