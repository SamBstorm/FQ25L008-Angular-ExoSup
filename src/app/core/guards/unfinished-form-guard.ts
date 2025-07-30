import { CanDeactivateFn } from '@angular/router';
import { IValidateComponent } from '../models/ivalidate-component';

export const unfinishedFormGuard: CanDeactivateFn<IValidateComponent> = (component, currentRoute, currentState, nextState) => {
  return component.validate;
};
