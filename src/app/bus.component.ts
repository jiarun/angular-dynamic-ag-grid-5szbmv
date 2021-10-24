import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `<p>Selected Bus: {{this.bus}}</p>`
})
export class BusComponent {

  bus: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params: { bus: string }) => {      
        this.bus = params.bus;
    });
  }
}