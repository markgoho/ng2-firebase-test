import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-retr-list',
  templateUrl: './retr-list.component.html',
  styleUrls: ['./retr-list.component.css']
})

export class RetrListComponent {
  items: FirebaseListObservable<any>;
  constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
  addItem(newName: string) {
    this.items.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.items.update(key, { text: newText });
  }
  deleteItem(key: string) {    
    this.items.remove(key); 
  }
  deleteEverything() {
    this.items.remove();
  }
}