import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignInPage/SignInPage'
class App extends Component {
   
    state = {
        currentUser : null,
        data : null,
    }
   
    setCurrentUser = (userInfo) => {
        console.log(userInfo);
        
        fetch('http://localhost:8080/users/signup', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({username: userInfo.username, password: userInfo.password})
        })
        .then( response =>  response.json())
        .then( data =>  {
            console.log(data)
            this.setState({currentUser : data.user.username, data})
        })
        .catch( err => console.log(err))
        // this.setState({currentUser : userInfo.username, userInfo})
    }

    render(){
        const { currentUser, data } = this.state;
        console.log(currentUser);
        return ( 
            <div>
                <Header currentUser={currentUser} />
                <Switch>
                    <Route exact path='/' render={() => <HomePage currentUser={currentUser} data={data}/>} />
                    <Route 
                        exact path='/login'
                        render={() => currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <SignInPage setCurrentUser={this.setCurrentUser}/>
                        )}
                    />
                </Switch>
            </div>
            );
    }

}
 
export default App;