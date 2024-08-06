import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule, MatCardHeader } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatCardHeader, MatButtonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  dataBindingImage1 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfbFTR-KVtVw9S4a4ZIsCaVNCb5Cc59jYhptFasqvsCIapcAyLqcjf1yBrKUDcK0aXPf0&usqp=CAU'
  dataBindingImage2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO5avSY495le7UdAouZ9rfnPhwpnfOMYDQbQ&s'

  valueOfCurlyBraces = '{{variableToInterpolate}}';
  squareBrackets = '[dataToBind]'

  //one-way data binding, source-to-view: interpolation
  title = 'Data Binding Demo';

  //one-way data binding, source-to-view: property binding
  currentImage = this.dataBindingImage1;
  isDangerous = false;

  //one-way data binding, view-to-source: event binding
  toggleMessage() {
    this.isDangerous = !this.isDangerous;
  }
  toggleImage() {
    this.currentImage = this.currentImage===this.dataBindingImage1 ? this.dataBindingImage2 : this.dataBindingImage1
  }

  //two-way data binding, view-to-source and source-to-view
  inputText = '';



}
