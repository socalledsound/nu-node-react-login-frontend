import React, { Component } from 'react'
import TextField from '../../components/TextField/TextField'
import './SignInPage.css'

class SignInPage extends Component {

    state = { 
        username : '',
        email : '',
        password : '',
        errors : {},
     }
     
     handleChange = (e) => {
       
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = (e) => {
        const { setCurrentUser } = this.props;
        e.preventDefault();
        const { username, email, password } = this.state;
        const values = {username, email, password};
        console.log(values);
        const errors = this.validateLogin(values);
        const noErrors = Object.keys(errors).length === 0;
        if(noErrors){
            console.log('authenticated', values);
            this.setState({ username : '',
                            email : '',
                            password : '',
                            errors : {},
                           });
            setCurrentUser(values);


        } else {
            console.log('validation error', errors);
            this.setState({ values, 
                            errors,
                        })
        }
        
    }

    validateLogin(values) {

        let errors = {};
    
        //email
        if(!values.email){
            errors.email = 'email required'
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
            errors.email = 'invalid email address'
        }
        //password
        if(!values.password){
            errors.password = 'password required'
        } else if(values.password.length < 6){
            errors.password = 'password must be at least six characters';
        }
    
        return errors
    
    }


     render() {
        const { username, email, password, errors } = this.state
        console.log({username, email, password, errors});
        return ( 
            <div className="sign-in-bg">
                <div className="form-container">
                <form onSubmit={this.handleSubmit}>
                        <TextField 
                            value={username} 
                            required
                            name='username'
                            onChange={this.handleChange}
                            error={errors.name}
                            placeholder={'please enter a user name'}
                        />
                        <TextField 
                            value={email} 
                            required
                            name='email'
                            onChange={this.handleChange}
                            error={errors.email}
                            placeholder={'please enter an email'}
                        />
                        <TextField 
                            value={password} 
                            required
                            name='password'
                            onChange={this.handleChange}
                            error={errors.password}
                            placeholder={'please enter a password'}
                        />
                        <button type="submit" className="submit-button">Submit</button>
                        </form>
                </div>
            </div>
         );
     }
    
}
 
export default SignInPage;