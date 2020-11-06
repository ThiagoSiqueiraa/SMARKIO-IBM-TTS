import ListCommentsService from './ListCommentsService';
import FakeCommentsRepository from '../repositories/fakes/FakeCommentsRepository';

let fakeCommentsRepository: FakeCommentsRepository;
let listComments: ListCommentsService;

describe('ListComments', () => {
  beforeEach(() => {
    fakeCommentsRepository = new FakeCommentsRepository();

    listComments = new ListCommentsService(fakeCommentsRepository);
  });

  it('should be able to list comments', async () => {
    const comment1 = await fakeCommentsRepository.create({
      comment: 'Teste comentário 1',
    });

    const comment2 = await fakeCommentsRepository.create({
      comment: 'Teste comentário 2',
    });

    const comment3 = await fakeCommentsRepository.create({
      comment: 'Teste comentário 3',
    });

    const comments = await listComments.execute();

    expect(comments).toEqual([comment1, comment2, comment3]);
  });
});
