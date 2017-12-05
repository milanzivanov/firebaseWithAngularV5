import { Component } from '@angular/core';

import { AngularFireDatabase, AngularFireObject, AngularFireList } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  items: Observable<any[]>; // question for aca guru

  constructor(afDb: AngularFireDatabase) {
    // constructor(afDb: AngularFirestore) {
      afDb.list('/items').valueChanges().subscribe(console.log);

      this.items = afDb.list('/items').valueChanges();
      console.log('Let we see ' + this.items);

    // Moving away from $key and $value

    // afDb.list('items').snapshotChanges().map(items => {
      //   // tslint:disable-next-line:no-shadowed-variable
      //   return items.map(items => ({ key: items.key, ...items.payload.val() }));
      // }).subscribe(items => {
        //   return items.map(item => item.key);
        // });

        // this.items = afDb.list('/items');
        // const items = afDb.list('/items');
        // console.log('RADI LI OVO U OPSTE ' + items);



        // Data manipulation methods

        // const afList = afDb.list('items');
        // afList.push({name: 'item123'});
        // const listObs = afList.snapshotChanges();
        // listObs.subscribe();

        // console.log('Test ' + listO);
        // console.log('Test 123 ' + this.items);

      }

  // items: AngularFireObject<any[]>;
  // items: AngularFireList<any[]>;

}
