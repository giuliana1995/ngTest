import { Component, OnInit } from '@angular/core';
import { InfoService } from '../info-service/info.service';

@Component({
  selector: 'app-info-figlio',
  templateUrl: './info-figlio.component.html',
  styleUrls: ['./info-figlio.component.scss']
})
export class InfoFiglioComponent implements OnInit {

  constructor(private service: InfoService) { 
    console.log('Ciao sono Info figlio:', this.service)
  }

  ngOnInit(): void {
  }

}
