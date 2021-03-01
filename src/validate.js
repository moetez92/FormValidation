
const  validate = (inputs) => {
 
    const errors = {} ;

    if(!inputs){
        errors.email = "email should not be empty";
    }
    else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputs.email)
    ){
        errors.email = "invalid email";
    }

if(!inputs.password) {
    errors.password = "invalid password";
}
 return errors;
}

export default validate ;