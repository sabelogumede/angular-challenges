import { Component } from '@angular/core';
import { AccordionItem } from './components/accordion/accordion-item.interface';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public accordionItems: AccordionItem[] = [
    {
      title: 'Example 1',
      content: 'Example content 1',
      isExpanded: false,
    },
    {
      title: 'Example 2',
      content: 'Example content 2',
      isExpanded: false,
    }
  ]
}
