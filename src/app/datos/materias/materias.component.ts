import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-materia',
  templateUrl: './materias.component.html',
  styleUrls: ['./materias.component.css']
})
export class MateriaComponent implements OnInit {

  materia: Observable<any[]> | any;

  constructor(firestore: AngularFirestore) {
    this.materia = firestore.collection('materias').valueChanges();
   }

  ngOnInit(): void {
  }

}
