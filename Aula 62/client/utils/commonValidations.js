import { emailRegExp } from "./regExpValidations";

export function handleEmailChange(text, setState) {
    if (emailRegExp.test(text)) {
        setState(prevState => ({
            ...prevState, 
            email: text, 
            emailError: false,
            isEmailValid: true 
        }));
    } else {
        setState(prevState => ({
            ...prevState, 
            email: text,
            emailError: true,
            isEmailValid: false
        }));
    }   
}

export function handlePasswordChange(text, setState) {
    if (text.trim().length >= 6) {
        setState(prevState => ({
            ...prevState, 
            password: text, 
            passwordError: false,
            isPasswordValid: true 
        }));
    } else {
        setState(prevState => ({
            ...prevState, 
            password: text,
            passwordError: true,
            isPasswordValid: false
        }));
    } 
}