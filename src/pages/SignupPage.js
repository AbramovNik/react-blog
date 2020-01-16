import React, { Component } from 'react';
import "./SignupPage.css";

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };

class SignupPage extends Component{
    constructor(props) {
        super(props);

        this.state = {
            email:null,
            password: null,
            formErrors: {
                email:'',
                password: ''
            } 
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();

        if(formValid(this.state.formErrors)){
            console.log(
                `Email : ${this.state.email}
                Password : ${this.state.password}
                `
            )
        }else {
            console.error("Form invalid")
        }
    }

    handleChange = e => {
        e.preventDefault();
        const {name, value} = e.target;
        let formErrors = this.state.formErrors;

        console.log("email", name);

        switch (name) {
            case "email":
              formErrors.email = emailRegex.test(value)
                ? ""
                : "invalid email address";
              break;
            case "password":
              formErrors.password =
                value.length < 6 ? "minimum 6 characaters required" : "";
              break;
            default:
              break;
          }
          this.setState({ formErrors, [name]: value }, () => console.log(this.state));

    }
    render(){
        const {formErrors} = this.state;
    return (
        <div className = 'wrapper'>
            <div className = "form-wrapper">
                <h1>Create Account</h1>
                <form onSubmit = {this.handleSubmit} noValidate>
                    <div className = "email">
                        <label htmlFor = 'email'>Email</label>
                        <input type = 'email'
                         className={formErrors.email.length > 0 ? "error" : null}
                          noValidate 
                          name = 'email' 
                          onChange = {this.handleChange}/>
                             {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
                    </div>
                    <div className = "password">
                        <label htmlFor = 'password'>Password</label>
                        <input type = 'password'
                         className={formErrors.password.length > 0 ? "error" : null} 
                          noValidate name = 'password' 
                          onChange = {this.handleChange}/>
                          {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
                    </div>
                    <div className = "createAccount">
                        <button type = 'submit'>Create Account</button>
                        <small>Already Have an Account?</small>
                    </div>
                </form>
            </div>
        </div>
    )
    }
}

export default SignupPage;