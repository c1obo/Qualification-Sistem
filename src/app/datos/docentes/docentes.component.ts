import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  docentes: Observable<any[]> | any;

  constructor(firestore: AngularFirestore) {
    this.docentes = firestore.collection('docentes').valueChanges();
   }


  ngOnInit(): void {
  }

}
