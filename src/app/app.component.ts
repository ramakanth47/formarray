import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup , Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formarray';


  testForm  = new FormGroup({
    mobileNums: new FormArray(
      [
        new FormControl(null,Validators.required)
       
      ]
    )
  })

  Add(){
   let mobilenums= this.testForm.get('mobileNums') as FormArray
    mobilenums.push(new FormControl(null,Validators.required))
   
  }

  delete(i:number){
    let mobilenums= this.testForm.get('mobileNums') as FormArray;
    mobilenums.removeAt(i)

    console.log(mobilenums)
  }
}
