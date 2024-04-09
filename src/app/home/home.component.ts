import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Fruit } from '../model/fruit';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fruits: Fruit[] = [];

  appleFruit: Fruit;
  orangeFruit: Fruit;
  grapeFruit: Fruit;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.appleFruit = {
      name: 'apple',
      count: 10,
      color: 'red',
    };

    this.orangeFruit = {
      name: 'orange',
      count: 10,
      color: 'orange',
    };

    this.grapeFruit = {
      name: 'grape',
      count: 10,
      color: 'blue',
    };
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('');
  }

  onPush(fruit: any) {
    console.log(fruit);
    this.fruits.push(fruit);
  }

  onPop(fruit: Fruit) {
    console.log('onPop');
    console.log(fruit);
    this.fruits.pop();
  }
}
