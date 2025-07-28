import { ValidatorFn } from "@angular/forms"

export function checkMajority() : ValidatorFn{
    return control => {
        let value = control.value;
        if(!value) return null;
        console.log(value);
        let date = new Date(value);        
        let delta : number = new Date().getTime() - date.getTime();
        let yearsOld = new Date(delta).getFullYear() - 1970;
        console.log(yearsOld);
        if(yearsOld < 18)
            return {checkMajority : true};
        return null;
    }
}