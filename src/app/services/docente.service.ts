import { AngularFirestore} from '@angular/fire//compat/firestore';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  constructor(private firestore: AngularFirestore) { }
  agregarDocente(docente: any): Promise<any>{
    return this.firestore.collection('Docentes').add(docente);
  }
}
