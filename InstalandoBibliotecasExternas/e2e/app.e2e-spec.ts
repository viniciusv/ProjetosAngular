import { InstalandoBibliotecasExternasPage } from './app.po';

describe('instalando-bibliotecas-externas App', () => {
  let page: InstalandoBibliotecasExternasPage;

  beforeEach(() => {
    page = new InstalandoBibliotecasExternasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
