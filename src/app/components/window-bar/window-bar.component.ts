import { Component } from '@angular/core';
import { appWindow, WebviewWindow } from "@tauri-apps/api/window"
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-window-bar',
  templateUrl: './window-bar.component.html',
  styleUrls: ['./window-bar.component.scss']
})
export class WindowBarComponent {

  constructor(private auth: AuthService) { }
  public login = WebviewWindow.getByLabel("login")

  maximizeWindow() {
    appWindow.toggleMaximize()
  }

  minimizeWindow() {
    appWindow.minimize()
  }

  closeWindow() {
    appWindow.close()
    this.login?.close();
  }

  logout() {
    this.auth.logout()
  }

}
