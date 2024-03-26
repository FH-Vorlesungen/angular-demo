import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";

export function dummyGuard(): CanActivateFn {
  return () => false;
}
