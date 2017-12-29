import { ValidatorFn, AbstractControl, ValidationErrors, FormGroup } from '@angular/forms';
// import * as moment from 'moment';
export interface ValidatorFn { (c: AbstractControl): ValidationErrors | null; }


export function Validator(regExp: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        return regExp.test(control.value) ? null : { 'invalidPattern': { value: control.value } };
    }
}

export function maxLength(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } => {
        return control.value.length > 20 ? { 'maxlengthValidator': control.value } : null;
    }
}

export function maxLength1(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: string } => {
        return control.value.length > 8 ? { 'maxlength1Validator': control.value } : null;
    }
}

// export function maxAge(): ValidatorFn {
//     return (control: AbstractControl): { [key: string]: string } => {
//         let startDate = moment(control.value);
//         let endDate = moment();
//         let res = moment.duration(endDate.diff(startDate));
//         console.log(res.asYears());
//         console.log(res.years());
//         return res.years() < 21 ? { 'dateOfBirthValidator': control.value } : null;
//     }
// }




// return (group: FormGroup) => {
// let passwordInput = group.controls[pass],
// passwordConfirmationInput = group.controls[confirmpass];



//  return passwordInput.value === passwordConfirmationInput.value ? null : { 'notSame':true }  


export class FormValidator {
    actualPassword: string;
    actualStartTime: string;
    actualEndTime: string;
    constructor() { }

    passWord(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: string } => {
            this.actualPassword = control.value;
            return null;
        }
    }


    static matchingPasswords(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            let password = control.get(['password']);
            let confirmPassword = control.get(['confirmpwd']);

            return password.value === confirmPassword.value ? null : { 'notSame': true }

        }
    }

    checkPassWord(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {

            return this.actualPassword === control.value ? null : { 'notSame': true }

        }
    }


    checkStartTime(): ValidatorFn {
        return (control: AbstractControl): { [key: string]: string } => {
            this.actualStartTime = control.value;
            return null;
        }
    }

    // checkEndTime(): ValidatorFn {
    //     return (control: AbstractControl): { [key: string]: any } => {
    //         let start = moment(this.actualStartTime);
    //         let end = moment(control.value);
    //         this.actualEndTime = control.value;

    //         return start >= end ? { 'dateAndTimeValidator': control.value } : null;
    //     }
    // }
    // checkInvalidDateFormat1(): ValidatorFn {
    //     return (control: AbstractControl): { [key: string]: any } => {
    //         let start = moment(this.actualStartTime);

    //         return moment(start).isValid() === true ? null : { 'InvalidDate1': true }



    //     }

    // }

    // checkInvalidDateFormat2(): ValidatorFn {
    //     return (control: AbstractControl): { [key: string]: any } => {

    //         let end = moment(this.actualEndTime);
    //         return moment(end).isValid() === true ? null : { 'InvalidDate2': true }

    //     }

    // }
}