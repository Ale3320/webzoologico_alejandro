import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AnimalService } from '../../services/animal-service';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animal-component',
  imports: [ReactiveFormsModule],
  templateUrl: './animal-component.html',
  styleUrl: './animal-component.css',
})
export class AnimalComponent {
newAnimalEntry() {
throw new Error('Method not implemented.');
}
  animalList: any = [];
  animalForm: FormGroup | any;

  constructor(private animalService: AnimalService,
    private toastr: ToastrService,
    private router: Router,
    private formBuilder: FormBuilder) {}
  
  getAllAnimals() {
    //subscribe crea una varibale data: la lista de animales
    this.animalService.getAllAnimalsData().subscribe((data: {}) => {
      this.animalList = data;
    });
  }
  
  newMessage(messageText: string) {
    this.toastr.success('Clic aquí para actualizar la lista', messageText)
      .onTap
      .pipe(take(1))
      .subscribe(() => window.location.reload());//hacer refresco a la pagina
  }
  
  ngOnInit() {
    this.getAllAnimals();
    this.animalForm = this.formBuilder.group({
      nombre: '',
      edad: 0,
      tipo: ''
    })
  }
}
