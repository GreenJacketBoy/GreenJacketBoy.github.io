import { NgOptimizedImage } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'Home',
    imports: [NgOptimizedImage, RouterModule, FooterComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})

export class HomeComponent {

    constructor(private titleService: Title) {
        this.titleService.setTitle('Home');
    }
}
