import React from 'react'
import "./App.css"
import useForm from "./Customhooks";
export default function Form() {
    const {inputs, handelsubmit, handelchange} = useForm({email:"",password:""})
    return (
       <form onSubmit={handelsubmit}>
            <div className="form"> 
            <div className="item">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" onChange={handelchange} value={inputs.email}/>
            </div>
            <div className="item">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={handelchange} value={inputs.password}/>
            </div>
            <button className=" item btn" type="submit">Submit</button>
        </div>
       </form>
    )
}
