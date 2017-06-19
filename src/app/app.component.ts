import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@import Component.';

  files: File | FileList;
  disabled: false;

  selectEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      console.log(files)
    } else {
      console.log(files)
    }
  };
}
