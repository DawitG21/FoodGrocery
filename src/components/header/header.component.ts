import { Component, OnInit } from '@angular/core';
// declare var jQuery: any;
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // disable body scroll which navbar is in active
    $(() => {
      $('.navbar-toggler').click(() => {
        $('body').toggleClass('noscroll');
      });
    });

    // Main navigation Active Class Add Remove
    $('.navbar-toggler').on('click', () => {
      $('header').toggleClass('active');
    });

    $(document).on('ready', () => {
      if ($(window).width() > 991) {
        $('header').removeClass('active');
      }
      $(window).on('resize', () => {
        if ($(window).width() > 991) {
          $('header').removeClass('active');
        }
      });
    });

  }
  // // When the user clicks on the button, scroll to the top of the document
  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
}
