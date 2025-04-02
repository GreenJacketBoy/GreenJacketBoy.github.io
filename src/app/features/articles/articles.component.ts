import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Title } from "@angular/platform-browser";
import { FooterComponent } from "../footer/footer.component";


@Component({
  selector: 'articles',
  imports: [RouterModule, FooterComponent, RouterModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css'
})


export class ArticlesComponent {
    
  constructor(private titleService: Title) {
      this.titleService.setTitle('Articles');
  }

}
