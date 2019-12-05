import { Router } from '@angular/router';
import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('header')header: ElementRef;
  constructor(private _router: Router) { }

  ngOnInit() {
    $( window ).resize(function() {
      if($(window).width() > 750) $('.add-class').addClass("col-lg-10");
      else $('.add-class').removeClass("col-lg-10");
    });
  }

  collapsingNavbar(){
   
  }
  logout(){
    localStorage.clear();
    this._router.navigateByUrl('/login');
  }
  isLoggedIn(){
    if(localStorage.getItem('accessToken')){
      return true;
    }
    else
    {
      return false;
    }
  }

}
