import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { EditePersonPage } from '../edite-person/edite-person';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  perRef:AngularFireList<any>;
  persons:Observable<any[]>;

  constructor(public navCtrl: NavController , public db:AngularFireDatabase) {

    this.perRef = db.list('persons');
    this.persons = this.perRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

    //db.list('/persons').remove();

    this.persons.forEach(person => {
      console.log(person);
    });

    console.log(this.persons)
  }

  DeletePerson(key){
     var stat = confirm('you sure need delete this person');
     if(stat == true){
   this.perRef.remove(key);
     }
  }

  EditPerson(key , name , lname , age){

    this.navCtrl.push(EditePersonPage , {
      key:key,
      name:name,
      lname:lname,
      age:age
    });

  }

}
