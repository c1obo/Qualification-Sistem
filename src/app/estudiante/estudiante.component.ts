import { EstudianteService } from './../services/estudiante.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  createDocente: FormGroup;
  enviado = false;
  constructor(private fb: FormBuilder, private EstudianteService: EstudianteService) {
    this.createDocente = this.fb.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required]


    }
    );
  }
  ngOnInit(): void {
  }
  agregarDocente() {
    this.enviado = true;
    if (this.createDocente.invalid) {
      return;
    }
    const estudiante: any = {
      nombre: this.createDocente.value.nombre,
      cantidad: this.createDocente.value.cantidad
    }
    this.EstudianteService.agregarEstudiante(estudiante).then(() => {
      console.log("registro exitoso");
    }).catch(error => {
      console.log(error);
    })
  }
}
