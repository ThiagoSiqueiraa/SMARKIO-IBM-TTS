import { Request, Response } from 'express';
import { container } from 'tsyringe';
import ShowCommentService from '@modules/comments/services/ShowCommentService';
import AppError from '@shared/errors/AppError';
import TextToSpeechCommentService from '@modules/comments/services/TextToSpeechCommentService';

export default class TTSWatsonController {
  public async play(request: Request, response: Response): Promise<void> {
    const { id } = request.params;
    const showComment = container.resolve(ShowCommentService);

    const comment = await showComment.execute(id);

    if (!comment) {
      throw new AppError('O comentário não foi encontrado');
    }

    const TTSComment = container.resolve(TextToSpeechCommentService);

    const buffer = await TTSComment.execute(comment);

    if (!buffer) {
      throw new AppError('Algum erro aconteceu ao reproduzir o áudio');
    }

    response.setHeader('Content-Type', 'audio/wav');
    //  response.setHeader('Content-Disposition', `attachment; filename=audio.wav`);
    response.setHeader('Content-Disposition', `inline`);
    response.write(buffer.data);
    response.end();
  }
}
