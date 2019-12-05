import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private _router: Router) { }
  username = localStorage.getItem('fname');
  ngOnInit() {
  }

  logout(){
    localStorage.clear();
    location.reload();
    //this._router.navigateByUrl('/login');
  }
}
