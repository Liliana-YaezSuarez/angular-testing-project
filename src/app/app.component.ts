import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
[x: string]: any;
  title = 'angular-testing-project';

  elemento:string[]=[]
  nuevo:string='';
  eliminar:string='';

  addTask() {
    this.elemento.push(this.nuevo)
    this.nuevo='';
  }

  deleteTask() {
    this.elemento.pop()
    this.eliminar='';
  }

  getTasks(): string[] {
    return [];
  }
}
