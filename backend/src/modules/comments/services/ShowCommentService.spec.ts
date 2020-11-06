import AppError from '@shared/errors/AppError';

import FakeCommentsRepository from '../repositories/fakes/FakeCommentsRepository';
import ShowCommentService from './ShowCommentService';

let fakeCommentsRepository: FakeCommentsRepository;
let showComment: ShowCommentService;

describe('ShowComment', () => {
  beforeEach(() => {
    fakeCommentsRepository = new FakeCommentsRepository();

    showComment = new ShowCommentService(fakeCommentsRepository);
  });

  it('should be able to show the comment', async () => {
    const comment1 = await fakeCommentsRepository.create({
      comment: 'Teste comentário 1',
    });

    const searchedComment = await showComment.execute(comment1.id);

    expect(searchedComment?.comment).toBe('Teste comentário 1');
  });

  it('should NOT be able to show a non-existing comment', async () => {
    await expect(showComment.execute('non-existing-id')).rejects.toBeInstanceOf(
      AppError
    );
  });
});
