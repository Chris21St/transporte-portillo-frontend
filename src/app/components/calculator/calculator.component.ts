import { Component } from '@angular/core';
import { DarkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  outsideLauren: number=0;
  insideLauren: number=0;
  totalOutside: number=0;
  totalInside:number=0;
  isDarkThemeOn: boolean = false;
  constructor(private darkModeService:DarkModeService){
    this.darkModeService.isDarkThemeOn$.subscribe((isDarkThemeOn) => {
      this.isDarkThemeOn = isDarkThemeOn;
    });
  }

  calculateTotal(){
    this.totalOutside=((this.outsideLauren-3)*2)+2
    this.totalInside=(this.insideLauren*2)+2
  }
}
