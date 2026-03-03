import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth-service';

export const authUserGuard: CanActivateFn = (route, state) => {
  const autService = inject(AuthService);
  if (autService.isUser()) {
    return true;
  }  else {
    alert('Debe estar logueado como usuario para acceder a esta sección');
    return false;
  }
};
