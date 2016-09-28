import { SinglePageAngularPage } from './app.po';

describe('single-page-angular App', function() {
  let page: SinglePageAngularPage;

  beforeEach(() => {
    page = new SinglePageAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
