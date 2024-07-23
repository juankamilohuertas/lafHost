import { Component } from '@angular/core';
import { RecentSearchesComponent } from '../../recent-searches/recent-searches.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RecentSearchesComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {

}
