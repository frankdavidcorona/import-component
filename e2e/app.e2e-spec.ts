import { ImportComponentPage } from './app.po';

describe('import-component App', () => {
  let page: ImportComponentPage;

  beforeEach(() => {
    page = new ImportComponentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
