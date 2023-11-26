import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment1';
  public result:string="";

  onCalculate(t1:any,t2:any,r1:any,r2:any,r3:any,r4:any,r5:any,r6:any,r7:any,r8:any){
    let ch="";
    if(r1.checked){
      ch=r1.value;
    }
    else if(r2.checked){
      ch=r2.value;
    }
    else if(r3.checked){
      ch=r3.value;      
    }
    else if(r4.checked){
      ch=r4.value;
    }
    else if(r5.checked){
      ch=r5.value;
    }
    else if(r6.checked){
      ch=r6.value;
    }
    else if(r7.checked){
      ch=r7.value;
    }
    else if(r8.checked){
      ch=r8.value;
    }
    
    let num1=Number(t1.value);
    let num2=Number(t2.value);

    switch(ch){
      case "Add"  : let sum=num1+num2;
                    this.result=`Sum = ${sum}`;
                    break;
      case "Mult" : let mul=num1*num2;
                    this.result=`Mult = ${mul}`;
                    break;
      case "Sub"  : let sub=num1-num2;
                    this.result=`Sub = ${sub}`;
                    break;
      case "Div"  : let div=num1/num2;
                    this.result=`Div = ${div}`;
                    break;
      case "Max"  : if(num1>num2)
                      this.result=`Max = ${num1}`;
                    else
                      this.result=`Max = ${num2}`;
                    break;
      case "Min"  : if(num1<num2)
                      this.result=`Min = ${num1}`;
                    else
                      this.result=`Min = ${num2}`;
                    break;
      case "Avg"  : let avg=(num1+num2)/2;
                    this.result=`Avg = ${avg}`;
                    break;
      case "Rem"  : let rem=num1%num2;
                    this.result=`Rem = ${rem}`;
                    break;
      default     : this.result=`<h4 class='alert alert-danger'>None of the option has been choosen</h4>`
    }
  }
}
