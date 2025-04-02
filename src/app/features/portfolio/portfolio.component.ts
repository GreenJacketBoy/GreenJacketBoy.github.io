import { NgOptimizedImage } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'portfolio',
    imports: [NgOptimizedImage, RouterModule, FooterComponent],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.css'
})

export class PortfolioMainComponent {

    private menuIsToggled = false;


    constructor(private titleService: Title) {
        this.titleService.setTitle('Portfolio');
    }

    toggleMenu() {
        this.menuIsToggled = !this.menuIsToggled;

        const button = document.getElementsByClassName('menu-toggle-button')[0];
        button.innerHTML = this.menuIsToggled ? 'hide menu >>>>' : '<<<< display menu';

        const menu = document.getElementsByClassName('image-and-text')[0];
        if (this.menuIsToggled)
            menu.classList.add('displayed');
        else
            menu.classList.remove('displayed');
    }
}
