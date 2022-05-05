import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    @Inject(DOCUMENT) document: Document
  ) { }

  ngOnInit(): void {
  }

   onclick (){
    // const menu = document.querySelector('#menu-bar');
    const navbar  = document.querySelector('.navbar')
   const loginForm = document.querySelector('.login-form')
   let searchForm = document.querySelector('.search-form')
      navbar?.classList.toggle('active');
      loginForm?.classList.remove('active');
    searchForm?.classList.remove('active');
    }
    login(){
         const loginForm = document.querySelector('.login-form')
         const navbar  = document.querySelector('.navbar')
         let searchForm = document.querySelector('.search-form')

         loginForm?.classList.toggle('active');
    navbar?.classList.remove('active');
    searchForm?.classList.remove('active');
}
search(){
  const loginForm = document.querySelector('.login-form')
  const navbar  = document.querySelector('.navbar')
  let searchForm = document.querySelector('.search-form')

  searchForm?.classList.toggle('active');
    navbar?.classList.remove('active');
    loginForm?.classList.remove('active');

}

theam(){
  let themeBtn = document.querySelector('#theme-btn');
  themeBtn?.classList.toggle('fa-sun');

    if(themeBtn?.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }
}

list(){
  const navbar  = document.querySelector('.navbar');
  navbar?.classList.remove('active');
}
  
}
