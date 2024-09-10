import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  phone: string = ''
  password: string = ''
  containerWidth  = 600

  constructor( private router: Router, private message: NzMessageService,){}
  ngOnInit(): void {
    let contentWidth = document.getElementsByClassName('container')[0].clientWidth
    if(contentWidth < 600){
      this.containerWidth = (contentWidth - 80)
    } else {
      this.containerWidth = 600
    }
   

  }
  login(){
    if(this.phone == ''){
      this.message.create('warning', 'Please Enter Phone Number!')
      return
    } else if(this.password == ''){
      this.message.create('warning', 'Please Enter Password')
      return
    } else{
      this.message.create('success','注册成功！')
        this.router.navigateByUrl('/login')
    }

  }
}
