import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Site title.  Will be deleted once the markdown is coded in.
  title = 'Tyll\'a\'s Website';

  // Markdown variable.
  markdown;

  ngOnInit() {
    this.setMarkdown('home.md');
  }

  setMarkdown(file: string) {
    const path = './assets/markdown/' + file;
    this.markdown = path;
  }
}
