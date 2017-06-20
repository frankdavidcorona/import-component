import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@import from CSV for CallerMate UI.';
  fileSelectMultipleMsg: string = 'No file(s) selected';
  fileUploadMultipleMsg: string = 'No file(s) uploaded yet.';
  disabled: false;

  selectMultipleEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      const names: string[] = [];
      for (let i: number = 0; i < files.length; i++) {
        names.push(files[i].name);
      }
      this.fileSelectMultipleMsg = names.join(',');
    } else {
      this.fileSelectMultipleMsg = files.name;
    }
    console.log(files);
  }

  uploadMultipleEvent(files: FileList | File): void {
    if (files instanceof FileList) {
      const names: string[] = [];
      for (let i: number = 0; i < files.length; i++) {
        names.push(files[i].name);
      }
      this.fileUploadMultipleMsg = names.join(',');
    } else {
      this.fileUploadMultipleMsg = files.name;
    }
    console.log(files);
  }

  cancelMultipleEvent(): void {
    this.fileSelectMultipleMsg = 'No file(s) selected yet.';
    this.fileUploadMultipleMsg = 'No file(s) uploaded yet.';
  }
}
