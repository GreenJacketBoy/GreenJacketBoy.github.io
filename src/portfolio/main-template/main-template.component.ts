import { NgOptimizedImage } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";


@Component({
    selector: 'ns-portfolio-main',
    imports: [NgOptimizedImage, RouterModule],
    templateUrl: './main-template.component.html',
    styleUrl: './main-template.component.css'
})

export class PortfolioMainComponent {
    
    // route: ActivatedRoute = inject(ActivatedRoute); // crée une nouvelle instance de ActivatedRoute
    
    
    title = 'website';
}
