import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authentication: CanActivateFn = (route, state) => {
  if (typeof window !== 'undefined') {
    const local = localStorage.getItem('token');
    if (!(local !== null)) {
      const route = inject(Router);
      route.navigateByUrl('');
      alert('el usuario no ha iniciado session');
    }
  }

  return true;
};
