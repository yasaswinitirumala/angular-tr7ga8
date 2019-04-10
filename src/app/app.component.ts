import { Component, OnInit, ViewChild } from '@angular/core';
import { CreateComponent } from './create/create.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
   @ViewChild( CreateComponent )child: CreateComponent;
  name = 'Angular';
  
  counter = 0;
ngOnInit(){}
  private increaseCounter(this) {
    this.counter++;
  }
  private getHelloWorldCounterValue(){
 this.counter = this.child.getCounter();
}
}
