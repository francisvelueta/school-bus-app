import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { map}  from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public afAuth: AngularFireAuth
  )   { }

loginEmail(email: string, pass: String){
  return new Promise((resolver, reject) => {
    this.afAuth.auth.signInWithEmailandPassword(email, pass)
    .then(userData => resolve(userData),
    err => reject (err));
  });
}

getAuth() {
return this.afAuth.authState.pipe(map(auth => auth))

}
  logout() {
    return this.afAuth.auth.signOut();
  }
}
