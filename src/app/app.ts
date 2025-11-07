import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AnimalComponent } from './components/animal-component/animal-component';

@Component({//Este es un decorador: da comportamiento a una clase-en este caso se convierte en componente
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('webzoologico_alejandro');
}
