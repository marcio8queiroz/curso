import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  ngOnInit(): void {
    console.log('Navbar Inicializou!');
    // throw new Error('Method not implemented.');
  }

}
