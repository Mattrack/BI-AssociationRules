import { AssociationRulesPage } from './app.po';

describe('association-rules App', function() {
  let page: AssociationRulesPage;

  beforeEach(() => {
    page = new AssociationRulesPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('association-rules works!');
  });
});
