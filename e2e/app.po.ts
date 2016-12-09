export class AssociationRulesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('association-rules-app h1')).getText();
  }
}
