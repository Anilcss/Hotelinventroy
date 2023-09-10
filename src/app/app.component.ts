import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hotelinventory';

   role=false;
    person='';
  changerole()
  {
    this.role=!this.role;
    if(this.role)
    {
      return this.person='admin';
    }
    else
    {
      return this.person='user';
    }
    
  }

}
