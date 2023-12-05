import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, Layout],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
