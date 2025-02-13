import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Title } from "@angular/platform-browser";


@Component({
    selector: 'portfolio',
    imports: [NgOptimizedImage, RouterModule],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})

export class PortfolioMainComponent {
    
    constructor(private titleService: Title) {
        this.titleService.setTitle('Portfolio');
    }
}
