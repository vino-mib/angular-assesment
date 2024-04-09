import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../auth.service';
import { Fruit } from '../model/fruit';

@Component({
  selector: 'fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.scss'],
})
export class FruitComponent implements OnInit {
  @Input() fruit: Fruit;

  @Output() push: EventEmitter<Fruit> = new EventEmitter<Fruit>();
  @Output() pop: EventEmitter<Fruit> = new EventEmitter<Fruit>();

  maxCount: number = 10;
  minCount: number = 0;

  message: string = 'You are not allowed to perform this operation';
  error: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  add() {
    if (this.authService.isAdmin()) {
      if (this.fruit.count === this.maxCount) {
        return;
      }
      this.fruit.count = this.fruit.count + 1;
      this.pop.emit(this.fruit);
    } else {
      this.error = true;
    }
  }

  remove() {
    if (this.authService.isAdmin()) {
      if (this.fruit.count === this.minCount) {
        return;
      }
      this.fruit.count = this.fruit.count - 1;

      console.log(this.fruit);
      this.push.emit(this.fruit);
    } else {
      this.error = true;
    }
  }
}
