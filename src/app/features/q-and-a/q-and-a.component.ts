import { NgOptimizedImage } from "@angular/common";
import { Component, OnInit, signal } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { QuoteService } from "../../services/quote.service";
import { FooterComponent } from "../footer/footer.component";


@Component({
    selector: 'q-and-a',
    imports: [NgOptimizedImage, RouterModule, FooterComponent],
    templateUrl: './q-and-a.component.html',
    styleUrl: './q-and-a.component.css'
})

export class QAComponent {


    constructor(private titleService: Title) {
        this.titleService.setTitle('Q&A');
    }
}
