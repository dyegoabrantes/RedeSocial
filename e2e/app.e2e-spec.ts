import { Atividade2Page } from './app.po';

describe('atividade2 App', () => {
  let page: Atividade2Page;

  beforeEach(() => {
    page = new Atividade2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
