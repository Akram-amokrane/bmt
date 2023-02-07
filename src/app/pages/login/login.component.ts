import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user.model';
import { AuthService } from 'src/app/services/auth.service';

import { WebviewWindow } from "@tauri-apps/api/window"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })
  public error?: string;


  constructor(private auth: AuthService) { }
  close() {
    WebviewWindow.getByLabel('login')?.close()
    WebviewWindow.getByLabel('main')?.close()
  }

  onLogIn() {
    var { username, password } = this.form.value
    this.auth.login(username!, password!, (e) => {
      this.error = e.error
    })
    this.form.reset()

  }

}
