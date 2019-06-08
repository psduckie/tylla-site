import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Markdown variable.
  markdown;

  ngOnInit() {
    this.setMarkdown('home.md');
  }

  setMarkdown(file: string) {
    const path = './assets/markdown/' + file;
    console.log('Loading ' + path);
    this.markdown = path;
  }
}
