import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AssociationRulesAppComponent } from '../app/association-rules.component';

beforeEachProviders(() => [AssociationRulesAppComponent]);

describe('App: AssociationRules', () => {
  it('should create the app',
      inject([AssociationRulesAppComponent], (app: AssociationRulesAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'association-rules works!\'',
      inject([AssociationRulesAppComponent], (app: AssociationRulesAppComponent) => {
    expect(app.title).toEqual('association-rules works!');
  }));
});
