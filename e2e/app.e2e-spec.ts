import { LazyHMoviesPage } from './app.po';

describe('lazy-h-movies App', () => {
  let page: LazyHMoviesPage;

  beforeEach(() => {
    page = new LazyHMoviesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
