import React,{useState} from "react";
import validate from "./validate";
 const useForm = (initialvalues) => {

    const [inputs, setinputs] = useState(initialvalues);

  const handelsubmit = (event) => {
    event.preventDefault();
    const errors = validate(inputs);
    console.log(errors);
    if ( Object.keys(errors).length === 0){
        console.log(" its ok  ")
    }
    else {
        console.log("it s wrong");
    }
  }
  const handelchange = (event) => {
      setinputs( inputs => ({...inputs,[event.target.name]:event.target.value}))
  }
  return {
      inputs,
      handelsubmit,
      handelchange
  };
};
export default useForm;