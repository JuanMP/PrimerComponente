import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { CountdownComponent } from './countdown/countdown.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProgressBarComponent, CountdownComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  [x: string]: any;


  counterProgress:number = 0;
  totalCountdown:number = 15;

  constructor() { }

  updateProgress($event: number){
    this.counterProgress = (this.totalCountdown - $event)/this.totalCountdown
    *100;
  }

  countdownFinished(){
    console.log("countdownd has finished");
  }

}
