import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile: any = {
    name: 'Damon Salvatore',
    email: 'damon@gmail.com',
    gender: 'Male'
  };

  constructor() { }

  ngOnInit(): void {
  }
}
