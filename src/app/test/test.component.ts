import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor() { }

  file1: any;
  file2: any;
  matchMode1: string;
  matchMode2: string;

  uploadFirstFile(fileList: FileList) {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const _this = this;
    fileReader.onloadend = function(x) {
      _this.file1 = fileReader.result;
    };
    fileReader.readAsText(file);
  }

  uploadSecondFile(fileList: FileList) {
    const file = fileList[0];
    const fileReader: FileReader = new FileReader();
    const _this = this;
    fileReader.onloadend = function(x) {
      _this.file2 = fileReader.result;
    };
    fileReader.readAsText(file);
  }

  testFilesMatching() {
    const array1 = this.file1.split('\n');
    const array2 = this.file2.split('\n');

    let isMatch = '';

    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]) {
          isMatch = isMatch + array1[i] + '\n';
        }
      }
    }

    this.matchMode1 = isMatch;

    isMatch = '';

    for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
        const child1 = array1[i];
        const child2 = array2[j];

        if ((child1.length > 0 && child2.length > 0)) {
          if (child1.includes(child2) || child2.includes(child1)) {
            isMatch = isMatch + array1[i] + '\n';
          }
        }
      }
    }

    this.matchMode2 = isMatch;
  }

  ngOnInit() {
  }

}
