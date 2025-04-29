import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgIf } from '@angular/common';
import { JavaScriptService } from './services/javascript.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatCardModule, MatButtonModule, MatProgressSpinnerModule, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  chargement: { [key: string]: boolean } = {};
  perfJavascript: { [key: string]: number } = {};
  title = 'PerformanceWasmJs';

  constructor(private javascriptService: JavaScriptService) {
  }

  async lancerTest(test: string): Promise<void> {
    this.chargement[test] = true;

    switch(test) {
      case "fibonacci":
        this.perfJavascript[test] = await this.javascriptService.fibonacci(8435);
        this.chargement[test] = false;
        console.log("fibonacci : " + this.perfJavascript[test] + "ms");
        break;
      case "tri":
        //this.javascriptService.tri();
        break;
      case "matrice":
        //this.javascriptService.matrice();
        break;
      case "recherche":
        //this.javascriptService.recherche();
        break;
      case "compression":
        //this.javascriptService.compression();
        break;
      default:
        console.log("Test passé en paramètre inexistant");
        break;
    }
  }
}
