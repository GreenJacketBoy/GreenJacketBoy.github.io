import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ns-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
})

export class AppComponent {

    constructor(private titleService: Title) {
        this.titleService.setTitle('Website');
    }
}
