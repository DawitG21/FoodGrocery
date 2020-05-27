import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'inibla';

  constructor() {

    // $(window).on('scroll', () => {
    //   const scroll = $(window).scrollTop();

    //   if (scroll >= 80) {
    //     $('#site-header').addClass('nav-fixed');
    //     // When the user scrolls down 20px from the top of the document, show the button
    //   } else if (scroll >= 20) {
    //     this.scrollFunction();
    //   } else {
    //     $('#site-header').removeClass('nav-fixed');
    //   }
    // });

  }

  ngOnInit() { }

  // scrollFunction() {
  //   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
  //     document.getElementById('movetop').style.display = 'block';
  //   } else {
  //     document.getElementById('movetop').style.display = 'none';
  //   }
  // }

  // // When the user clicks on the button, scroll to the top of the document
  // topFunction() {
  //   document.body.scrollTop = 0;
  //   document.documentElement.scrollTop = 0;
  // }

}
