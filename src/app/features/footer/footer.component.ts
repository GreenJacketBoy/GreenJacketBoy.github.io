import { NgClass, NgOptimizedImage } from "@angular/common";
import { Component, Input, OnInit, signal, ViewChild, viewChild } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { QuoteService } from "../../services/quote.service";


@Component({
    selector: 'custom-footer',
    imports: [NgOptimizedImage, RouterModule, NgClass],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css'
})

export class FooterComponent {

    private quotes!: Array<string>;
    private quoteIndexesLeft: Set<number> = new Set(); // the indexes of the quotes that haven't been displayed yet

    public currentQuote = signal('*** loading quote ***');

    @Input('style')
    public style!: 'home' | 'portfolio' | 'blog';
    
    constructor(private titleService: Title, private quoteService: QuoteService) {
        this.titleService.setTitle('Home');
        this.quotes = this.quoteService.getFooterQuotes();

        this.nextQuote();
    }

    /**
     * This will go through each and every quote in the list in a random order.
     * Only as I'm writing this comment I realize that I probably coule have used
     * a built in shuffle method, but I'm not going to let all that work go to waste.
     * Also it would probably be 0.5% less efficient than what I did. 
     */
    nextQuote() {

      if (this.quoteIndexesLeft.size === 0) // refills the quote index list if it is empty
        this.quotes.forEach((_dummy, index) => this.quoteIndexesLeft.add(index));

      const array = Array.from(this.quoteIndexesLeft.values()); // converts the set to an array
      const index = array[Math.floor(Math.random() * (array.length - 1))]; // get a random index from the array of indexes
      
      this.currentQuote.set(this.quotes[index]); // updates the quote

      this.quoteIndexesLeft.delete(index);
    }
}
