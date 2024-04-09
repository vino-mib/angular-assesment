import { Component, OnInit, Input } from '@angular/core';
import { Fruit } from '../model/fruit';
@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  @Input() fruits: Fruit[];

  constructor() {}

  ngOnInit(): void {}
}
