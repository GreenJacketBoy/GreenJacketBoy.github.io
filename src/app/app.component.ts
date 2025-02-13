import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ns-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Hub';
}
