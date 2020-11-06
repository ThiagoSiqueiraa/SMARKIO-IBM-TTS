import CreateCommentService from './CreateCommentService';
import FakeCommentsRepository from '../repositories/fakes/FakeCommentsRepository';

describe('CreateComment', () => {
  it('should be able to create a new comment', async () => {
    const fakeCommentsRepository = new FakeCommentsRepository();
    const createComment = new CreateCommentService(fakeCommentsRepository);

    const comment = await createComment.execute({
      comment: 'Teste de comentário, será que vai?',
    });

    expect(comment).toHaveProperty('id');
    expect(comment.comment).toBe('Teste de comentário, será que vai?');
  });
});
