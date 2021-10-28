import { AngularFirestore} from '@angular/fire//compat/firestore';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  constructor(private firestore: AngularFirestore) { }
  agregarEstudiante(estudiante: any): Promise<any>{
    return this.firestore.collection('Estudiantes').add(estudiante);
  }
}
