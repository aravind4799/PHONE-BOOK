import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { PhoneBook } from '../shared/interfaces';

@Component({
  selector: 'app-phone-book-card',
  templateUrl: './phone-book-card.component.html',
  styleUrls: ['./phone-book-card.component.scss']
})
export class PhoneBookCardComponent implements OnInit {
  private _userdata:PhoneBook={firstName:'',lastName:'',phoneNumber:0};
  // deleteNumber:number=0;
  // updateNumber:number=0;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  @Input()
  set User(data:PhoneBook) {
    this._userdata=data;
  }
  get User():PhoneBook{
    return this._userdata;
  }


 
  @Input() deleteNumber!:number
  @Output() deletenumber:EventEmitter<number> = new EventEmitter<number>();

 
 



  onDelete(p:number): void {
    if(confirm("Process cannot be revoked!!\n Delete this user")){
      console.log(p);
    this.deletenumber.emit(p);

    }
    


  }
  onUpdate(p:number): void {
    if(confirm("Update this User data?")){
      this.router.navigateByUrl('/users/functionupdate/update/'+p)
    }
 
  }

}
