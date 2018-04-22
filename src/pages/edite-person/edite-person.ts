import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
//import { AngularFireDatabase , FirebaseListObservable } from  'angularfire';

/**
 * Generated class for the EditePersonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edite-person',
  templateUrl: 'edite-person.html',
})



export class EditePersonPage {

  person = {
    key:'',
    name:'',
    lname:'',
    age:''
  };

  perRef:AngularFireList<any>;
  persons:Observable<any[]>;



  constructor(public navCtrl: NavController, public navParams: NavParams , public db:AngularFireDatabase) {

     this.person.key =  this.navParams.get('key');
     this.person.name =  this.navParams.get('name');
     this.person.lname =  this.navParams.get('lname');
     this.person.age =  this.navParams.get('age');


    this.perRef = db.list('persons');
    this.persons = this.perRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  Goto(){

    this.navCtrl.push(HomePage);
    this.navCtrl.pop();

  }

  updatePerson(name , lname , age){

    this.perRef.update(this.person.key ,
      {
      name:name ,
      lname:lname,
      age:age
     }
    ).then(_=>{
      this.navCtrl.push(HomePage);
    } , error=>{console.log(error)});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditePersonPage');
  }

}
