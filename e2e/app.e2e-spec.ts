import { PinkiAppPage } from './app.po';

describe('pinki-app App', function() {
  let page: PinkiAppPage;

  beforeEach(() => {
    page = new PinkiAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
