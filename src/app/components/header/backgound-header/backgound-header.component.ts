import { Component, OnInit } from '@angular/core';
import {PortfolioService} from '../../../services/portfolio.service';

@Component({
  selector: 'app-backgound-header',
  templateUrl: './backgound-header.component.html',
  styleUrls: ['./backgound-header.component.css']
})
export class BackgoundHeaderComponent implements OnInit {
portfolio:any;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.portfolio= data;
    });
  }

}
