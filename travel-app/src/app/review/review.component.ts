import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() {
    
   }

  ngOnInit(): void {
    var swiper = new Swiper(".review-slider", {
      loop:true,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 5500,
          disableOnInteraction: false,
      },
      pagination: {
          el: ".swiper-pagination",
      },
  });
  }

}
