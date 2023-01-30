import { Component } from '@angular/core';
import { appWindow } from "@tauri-apps/api/window"

@Component({
  selector: 'app-window-bar',
  templateUrl: './window-bar.component.html',
  styleUrls: ['./window-bar.component.scss']
})
export class WindowBarComponent {


  maximizeWindow() {
    appWindow.toggleMaximize()
  }

  minimizeWindow() {
    appWindow.minimize()
  }

  closeWindow() {
    appWindow.close()
  }

}
