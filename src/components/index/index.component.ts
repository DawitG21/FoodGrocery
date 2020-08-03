import { Component, OnInit } from '@angular/core';
/* import { Router } from '@angular/router'; */

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  amSite = 'http://inibla.com/';
  enSite = 'http://ebirr.com/';
  am = localStorage.getItem('amET');

  constructor(
    /* public route: Router */
  ) { }

  ngOnInit() {
    console.log(this.am);
   /*  if (this.am !== '') {
      window.location.href = this.amSite;
    } else{
      // window.location.href = this.enSite;
    } */

  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    /* this.route.navigate(['/faq']); */
  }

}
