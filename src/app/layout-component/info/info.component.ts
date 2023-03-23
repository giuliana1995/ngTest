import { Component, OnInit } from '@angular/core';
import { Api } from './api-model/model';
import { InfoService } from './info-service/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
  providers: [InfoService]
})
export class InfoComponent implements OnInit {

  imgs: Api[] = [];

  constructor(private service: InfoService) {}

  ngOnInit(): void {
  }

  callApi() {
    this.service.getApi().subscribe(response => {
      this.imgs = [...response] 
    })
  }

}
