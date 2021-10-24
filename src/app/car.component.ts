import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<p>Selected Car: {{this.car}}</p>`
})
export class CarComponent {

  car: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: { car: string }) => {
        this.car = params.car;
    });
  }
}