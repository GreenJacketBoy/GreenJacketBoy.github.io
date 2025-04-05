import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ns-aboutme',
  imports: [RouterLink],
  templateUrl: './aboutme.component.html',
  styles: ['.red { color: red }']
})
export class AboutMeComponent {
  title = 'About Me';
}
