import { Component, OnInit } from '@angular/core';
/* import { Router } from '@angular/router'; */

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(
    /* public route: Router */
    ) { }

  ngOnInit() { }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    /* this.route.navigate(['/faq']); */
  }

}
