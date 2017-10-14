import { BloggerFrontendPage } from './app.po';

describe('blogger-frontend App', function() {
  let page: BloggerFrontendPage;

  beforeEach(() => {
    page = new BloggerFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
