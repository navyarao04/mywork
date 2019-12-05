import { DmaFrontendPage } from './app.po';

describe('dma-frontend App', () => {
  let page: DmaFrontendPage;

  beforeEach(() => {
    page = new DmaFrontendPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
