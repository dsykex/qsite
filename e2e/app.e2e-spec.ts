import { QSitePage } from './app.po';

describe('qsite App', function() {
  let page: QSitePage;

  beforeEach(() => {
    page = new QSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
