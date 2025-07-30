import { CanMatchFn } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const isAdminGuard: CanMatchFn = (route, segments) => {
  const userService : UserService = inject(UserService);

  if(userService.currentUser()?.role == 'admin') return true;
  return false;
};
