import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentParserComponent } from './content-parser.component';

describe('ContentParserComponent', () => {
  let component: ContentParserComponent;
  let fixture: ComponentFixture<ContentParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
