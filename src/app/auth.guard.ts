import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const email = localStorage.getItem("email");
  if(email == null){
    console.log('guard')
    return false;
  }
  return true;
};
