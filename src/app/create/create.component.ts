import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  counter = 0;

  private increaseCounter(this) {
    this.counter++;
  }

  public getCounter(){
    return this.counter;
  }

}