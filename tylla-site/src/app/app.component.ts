import { Component, HostListener, OnInit } from '@angular/core';
import { MarkdownService } from 'ngx-markdown';
import { stringify } from 'querystring';

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
    const path = 'raw-loader!./assets/markdown/' + file;
    this.markdown = require(path);
  }
}
