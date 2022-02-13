import React from "react";
export default class LoginForm extends React.Component{
    render (){
        return <div className="container">
            {/* h3 that says Log In   */}
       
        <form>  
            <h3>Log In</h3>
        {/* Create a LoginForm component that should contain username and password input fields */}
            <div className="form-group"> 
                <label for="email">User Name</label> <br></br>
                    <input type="email" className="form-control" id="email" placeholder="Enter email"></input> </div>  
            <div className="form-group"> 
            <label for="pwd">Password</label><br></br>
                <input type="password" className="form-control" id="pwd" placeholder="Enter password"></input> </div>  
                <button type="submit" className="btn btn-primary">Submit</button> 
        </form>  
    </div>  
    }
}
/* 1. Using create-react-app, create a new React project.
2. Create a LoginForm component that should contain username and password input fields, 
an , and a border. Style the component using the default generated css file.
3. Create a Navigation component that contains links styled like a navbar. The links don’t have to go anywhere. 
4. Put the Navigation component at the top of the page and the LoginForm in the center of the page. */