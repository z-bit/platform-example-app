import { PlatformExampleAppPage } from './app.po';

describe('platform-example-app App', () => {
  let page: PlatformExampleAppPage;

  beforeEach(() => {
    page = new PlatformExampleAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
