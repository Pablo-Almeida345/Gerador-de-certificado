import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
    this.mensagem();
    console.log('Component NAVBAR');
  }

  mensagem() {
    console.log('Component NAVBAR');
  }
}
