import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
//import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

   person:AngularFireList<any>;

  constructor(public navCtrl: NavController , public db: AngularFireDatabase) {

    this.person = db.list('persons');

  }

  createPerson(name , lname , age){

    this.person.push({
       name:name,
       lname:lname,
       age:age
     }).then(nemperson =>{
       this.navCtrl.push(HomePage);
     });

  }


}

