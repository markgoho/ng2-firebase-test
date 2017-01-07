import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';


@Component({
  selector: 'app-retr-object',
  templateUrl: './retr-object.component.html',
  styleUrls: ['./retr-object.component.css']
})
export class RetrObjectComponent {

  item: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.item = af.database.object('/item');
  }
  save(newName: string) {
    this.item.set({ name: newName });
  }
  update(newSize: string) {
    this.item.update({ size: newSize });
  }
  delete() {
    this.item.remove();
  }

}
