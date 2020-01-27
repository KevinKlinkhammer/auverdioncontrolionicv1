import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

import { Observable } from 'rxjs';
import { Todo } from '../models/todo.interface';
import { FirestoreService } from '../services/data/firestore.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public todoList;
  constructor(private fireStore: AngularFirestore, private firestoreService: FirestoreService) {}

//  ionViewDidEnter() {
 //     this.todoList = this.firestoreService.getToDoList().valueChanges();
 // }

  ngOnInit() {
    this.todoList = this.firestoreService.getToDoList().valueChanges();
    console.log(this.todoList);
  }

}
