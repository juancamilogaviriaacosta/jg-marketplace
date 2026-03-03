import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth-service';
import { inject } from '@angular/core';

export const authAdminGuard: CanActivateFn = (route, state) => {
  const autService = inject(AuthService);
  if (autService.isAdmin()) {
    return true;
  }  else {
    alert('Debe estar logueado como administrador para acceder a esta sección');
    return false;
  }
};
