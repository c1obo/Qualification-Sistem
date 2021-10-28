import { MateriaService } from './../services/materia.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {
  createDocente: FormGroup;
  enviado = false;
  constructor(private fb: FormBuilder, private MateriaService: MateriaService) {
    this.createDocente = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      profesor: ['', Validators.required]


    }
    );
  }
  ngOnInit(): void {
  }
  agregarMateria() {
    this.enviado = true;
    if (this.createDocente.invalid) {
      return;
    }
    const materia: any = {
      nombre: this.createDocente.value.nombre,
      cantidad: this.createDocente.value.cantidad
    }
    this.MateriaService.agregarMateria(materia).then(() => {
      console.log("registro exitoso");
    }).catch(error => {
      console.log(error);
    })
  }
}
