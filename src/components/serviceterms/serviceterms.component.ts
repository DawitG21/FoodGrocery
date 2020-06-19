import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serviceterms',
  templateUrl: './serviceterms.component.html',
  styleUrls: ['./serviceterms.component.css']
})

export class ServicetermsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  scroll(el: HTMLElement) {
    el.scrollIntoView({ behavior: 'smooth' });
  }

}
