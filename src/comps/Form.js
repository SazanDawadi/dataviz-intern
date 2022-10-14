import React from 'react';
import formFeild from '../schema/formFields.json';
import '../styles/form.css'

const Form = () => {
  return (
    <div>
        <form>
            <h1>{formFeild.form.form_name}</h1>
            {formFeild.form.feilds.map(inputData => {
                return(
                    <div className='input-container'>
                        <label>{inputData.label}</label>
                        <input type= {inputData.html_element} placeholder = {inputData.name} />
                        <br/>
                    </div>

                )
            })}
            <input type = "submit" value = "Sign Up" />
        </form>
    </div>
  )
}

export default Form