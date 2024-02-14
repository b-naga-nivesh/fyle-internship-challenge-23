import { Component} from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  inputValue:string = '';
  showValue() {
    alert(`Input feild value ${this.inputValue}`)
  }
}
