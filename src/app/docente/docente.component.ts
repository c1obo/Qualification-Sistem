import { DocenteService } from './../services/docente.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent implements OnInit {
  createDocente: FormGroup;
  enviado = false;
  constructor(private fb: FormBuilder, private docenteService: DocenteService) {
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
    const docente: any = {
      nombre: this.createDocente.value.nombre,
      cantidad: this.createDocente.value.cantidad
    }
    this.docenteService.agregarDocente(docente).then(() => {
      console.log("registro exitoso");
    }).catch(error => {
      console.log(error);
    })
  }
}
