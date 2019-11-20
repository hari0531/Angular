import { Component, OnInit } from '@angular/core';
import{FormGroup , /*FormControl,*/FormBuilder,Validator, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  employeeForm :FormGroup; // define new from group with name EmployeeFrom (variabelName :DateType)



  // This object will hold the messages to be displayed to the user
// Notice, each key in this object has the same name as the
// corresponding form control
formErrors = {
  'fullName': '',
  'email': '',
  'skillName': '',
  'experienceInYears': '',
  'proficiency': ''
};

// This object contains all the validation messages for this form
validationMessages = {
  'fullName': {
    'required': 'Full Name is required.',
    'minlength': 'Full Name must be greater than 2 characters.',
    'maxlength': 'Full Name must be less than 10 characters.'
  },
  'email': {
    'required': 'Email is required.'
  },
  'skillName': {
    'required': 'Skill Name is required.',
  },
  'experienceInYears': {
    'required': 'Experience is required.',
  },
  'proficiency': {
    'required': 'Proficiency is required.',
  },
};

  ngOnInit() {



  /*this.employeeForm = new FormGroup({
  fullName  : new FormControl(), //  creating new from controller fullName
  email     : new FormControl(),  // creating new from controller email
  
  skills: new FormGroup({ // Create skills form group
    skillName: new FormControl(),
    experienceInYears: new FormControl(),
    proficiency: new FormControl()
  })
 });*/

 //lets us initialized form group using formBuilder
 
  this.employeeForm = this.fb.group({
  fullName  : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(10)]], //  creating new from controller fullName
  email     : ['',[Validators.required]],  // creating new from controller email
  
  skills: this.fb.group({ // Create skills form group
    skillName: ['',[Validators.required]],
    experienceInYears: ['',[Validators.required]],
    proficiency: ['',[Validators.required]],
  })
 });


 // Subscribe to FormGroup valueChanges observable
/*this.employeeForm.valueChanges.subscribe(
  (value) => {
    console.log(JSON.stringify(value));
  }
);*/

  }


  onSubmit(): void { // create on submit method and and map the action in employee.componet.html to here
    console.log(this.employeeForm.value); // read the values of form group
    console.log(this.employeeForm); 
  }
  

 /* onLoadDataClick(): void{

    this.employeeForm.setValue({
      fullName:'hari',
      email   :'hari@gmail.com',
      skills :{

        skillName:'java',
        experienceInYears:'5.5',
        proficiency:'beginner'
      }

    })
  }*/

  /*onLoadDataClick(): void{

    this.employeeForm.patchValue({//use path value to set  only sub set of values as setValue give error if we want to set value to some sub set
      fullName:'hari',
      email   :'hari@gmail.com',
      skills :{

        skillName:'java',
        experienceInYears:'5.5',
        proficiency:'beginner'
      }

    })
  }*/

  //lets use belowLoop to log erros # 1)group:FormGroup=this.employeeForm  adding defult value to group varible
  logValidationErrors(group:FormGroup=this.employeeForm):void{
Object.keys(group.controls).forEach((key:string)=>{
  console.log("key-->"+key)
  const abscontrol = group.get(key);
  if(abscontrol instanceof FormGroup){
    this.logValidationErrors(abscontrol)
  }else{
    this.formErrors[key] = '';
    if(abscontrol && !abscontrol.valid && (abscontrol.touched || abscontrol.dirty)){
      console.log("@@-->"+key)
     const messageErrors=this.validationMessages[key];
    // console.log("message :"+JSON.stringify(abscontrol.errors));
      for(const errorKey in abscontrol.errors){
        
        this.formErrors[key]+=messageErrors[errorKey]+' ';
      }
    }
  }

})

}

onLoadDataClick(): void{

  this.logValidationErrors(this.employeeForm)
  console.log(this.formErrors);
  
  }


}
