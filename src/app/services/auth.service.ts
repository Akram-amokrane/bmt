import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user.model';

import { WebviewWindow } from "@tauri-apps/api/window"
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user?: User;

  public mainWin = WebviewWindow.getByLabel('main')
  public loginWin = WebviewWindow.getByLabel('login')


  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string, callback: (e: any) => void) {
    this.http.post<User>(`${environment.apiAuth}/`, { username: username, password: password }).subscribe((u: User) => {
      if (u.id) {
        this.user = u
        localStorage.setItem('user', JSON.stringify(this.user));

        this.mainWin?.show()
        this.loginWin?.hide()
      } else {
        callback(u)
      }
    });
  }

  getCurrentUser(): User {
    return JSON.parse(localStorage.getItem('user')!)
  }

  logout() {
    this.router.navigate(["/dashboard"])
    this.mainWin?.hide()
    this.loginWin?.show()
  }
}
