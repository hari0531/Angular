import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-test',
  template: `
    <p>
      inline-test works!
    </p>
  `,
  styleUrls: ['./inline-test.component.css']
})
export class InlineTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
