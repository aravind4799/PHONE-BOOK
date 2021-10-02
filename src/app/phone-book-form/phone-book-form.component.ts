import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../services.service';
import {PhoneBook} from '../shared/interfaces';

@Component({
  selector: 'app-phone-book-form',
  templateUrl: './phone-book-form.component.html',
  styleUrls: ['./phone-book-form.component.scss']
})
export class PhoneBookFormComponent implements OnInit {
  id:string='';
  function:string="";
  number:number=0;

  dummyuser:PhoneBook={
    firstName:'',
    lastName:'',
    phoneNumber:0
  }

  constructor( 
    private _formBuilder: FormBuilder,
    private _service:ServicesService,
    private route:ActivatedRoute,
    private router:Router,
    ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.number=this.route.snapshot.params['number'];

    console.log(this.route.snapshot.params['number']);
    this.function= this.id==='add' ? 'Add':'Update';

    if(this.function==='Update'){
      this.dummyuser=this._service.getUser(this.number);
      console.log(this.dummyuser);
    }
  }

  userForm = this._formBuilder.group({
    firstName:["",[Validators.required, Validators.pattern('^[a-zA-z ]*$')]],
    lastName:[''],
    phoneNumber:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
  })
  
  

  onSubmit =()=>{
    let user:PhoneBook={
      firstName:this.userForm.value.firstName,
      lastName:this.userForm.value.lastName,
      phoneNumber:this.userForm.value.phoneNumber
    }
    if(this.function=='Add'){
      if(this._service.checkForUniqueNumber(user.phoneNumber)){
        this._service.addUser(user);
      }
      else{
        alert("Phone Number already exists! try another Number");
      }
      
    }
    else{
      this._service.updateUser(user,this.number);
      this.router.navigateByUrl('')
    }
    // console.log(localStorage.getItem('userdata'));
    this.userForm.reset();
  }

 



}
