import { AngularFirestore} from '@angular/fire//compat/firestore';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MateriaService {
  constructor(private firestore: AngularFirestore) { }
  agregarMateria(materia: any): Promise<any>{
    return this.firestore.collection('Materias').add(materia);
  }
}

