import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidator {
    static minPasswordLength(min: number): ValidatorFn {
        
        return (control: AbstractControl<any, any>): ValidationErrors | null => {
            if (control.value.length < min) {
                return {
                    passwordLength: true
                };
            }
            
            return null;
        };
    }

    static noDigits(control: AbstractControl<any, any>): ValidationErrors | null {
        
        const regex = /[0-9]/;

        if (control.value.match(regex)) {
            return {
                noDigits: true
            };
        }

        return null;
    }

    static passwordMatch(group: AbstractControl<any, any>): ValidationErrors | null {
        const password = group.get('password')?.value;
        const passwordConfirmation = group.get('passwordConfirmation')?.value;

        if (password !== passwordConfirmation) {
            return {
                passwordMatch: true
            };
        }

        return null;
    }
}