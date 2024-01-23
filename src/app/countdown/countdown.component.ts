import { Component, Input, Output, OnInit, OnDestroy, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [],
  templateUrl: './countdown.component.html',
  styleUrl: './countdown.component.css'
})
export class CountdownComponent implements OnInit, OnDestroy, OnChanges {

  ngOnInit(): void {
   this.startCountdown();
  }

  ngOnDestroy():void {
    this.clearTimeout();
  }

  ngOnChanges(changes: SimpleChanges):void {
    console.log("init value updated to: ", changes['init'].currentValue);
    this.startCountdown();
  }

  //Eventos reducir contador y acaba cuenta atrás
  @Output() onDecrease = new EventEmitter<number>();
  @Output() onComplete = new EventEmitter<void>();

  @Input() init:number|null = null;
  public counter:number = 0;
  private countdownTimerRef:any = null;

  constructor() { }



  //Inicializa el Contador
  startCountdown(){
    if(this.init && this.init >0){
      this.clearTimeout();
      this.counter = this.init;
      this.doCountdown();
    }
  }

  //Cuenta Atrás
  doCountdown(){
    this.countdownTimerRef = setTimeout(()=>{
      this.counter = this.counter -1;
      this.processCountdown();
    }, 1000);
  }

  private clearTimeout(){
    if(this.countdownTimerRef){
      clearTimeout(this.countdownTimerRef);
      this.countdownTimerRef = null;
    }
  }

  //Comprobar cuenta atrás si ha finalizado
  processCountdown(){
    this.onDecrease.emit(this.counter);
    console.log("count is ", this.counter);

    if(this.counter == 0){
      this.onComplete.emit();
      console.log("--counter end--");
    }
    else{
      this.doCountdown();
    }
  }
}
