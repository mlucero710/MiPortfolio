import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';
import { AboutMe } from '../../../assets/interfaces'
import { ABOUTME } from '../../../assets/mock-db'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  about= ABOUTME;
  
  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  }
}
