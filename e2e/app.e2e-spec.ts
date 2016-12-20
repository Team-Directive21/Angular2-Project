import { AngularSpaAppPage } from './app.po';

describe('angular-spa-app App', function() {
  let page: AngularSpaAppPage;

  beforeEach(() => {
    page = new AngularSpaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
