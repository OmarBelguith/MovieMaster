import { MovieMasterPage } from './app.po';

describe('movie-master App', () => {
  let page: MovieMasterPage;

  beforeEach(() => {
    page = new MovieMasterPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
