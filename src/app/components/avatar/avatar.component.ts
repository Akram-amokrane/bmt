import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() fullname!: string;
  public letters: string = "";


  ngOnInit(): void {
    if (this.fullname != "") {
      if (this.fullname.indexOf(" ") != -1) {
        var name = this.fullname.split(" ");
        this.letters = name[0][0] + name[1][0]
      } else {
        this.letters = this.fullname[0] + this.fullname[1]
      }

    }
  }

}
