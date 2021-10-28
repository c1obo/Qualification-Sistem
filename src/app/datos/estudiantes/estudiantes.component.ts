import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent implements OnInit {

  estudiantes: Observable<any[]> | any;

  constructor(firestore: AngularFirestore) {
    this.estudiantes = firestore.collection('estudiantes').valueChanges();
   }

  ngOnInit(): void {
  }

}
