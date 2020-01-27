import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Todo } from '../../models/todo.interface';

@Injectable()
export class FirestoreService {

  constructor(public firestore: AngularFirestore) {}

  createToDo(
    complete: boolean,
    title: string
  ): Promise<void> {
    const id = this.firestore.createId();

    return this.firestore.doc(`todos/${id}`).set({
      id,
      complete,
      title
    });
  }

  getToDoList(): AngularFirestoreCollection<Todo> {
  return this.firestore.collection(`todos`);
}

}