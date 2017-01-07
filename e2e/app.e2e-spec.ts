import { Ng2Angularfire2TestPage } from './app.po';

describe('ng2-angularfire2-test App', function() {
  let page: Ng2Angularfire2TestPage;

  beforeEach(() => {
    page = new Ng2Angularfire2TestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
