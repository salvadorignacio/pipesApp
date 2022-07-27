import { Component , OnInit} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'pipesApp';

  constructor(private primeNGConfig : PrimeNGConfig) {

  }

  ngOnInit(){
    this.primeNGConfig.ripple = true; //Efecto borbuja al hacer click en los elemtos de PrimeNG
  }
}
