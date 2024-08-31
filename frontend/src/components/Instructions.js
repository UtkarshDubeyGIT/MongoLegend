import React from 'react';

const Instructions = () => {
    return (
        <div>
            <h1>Instructions</h1>
            <p>Welcome to our application! Follow the steps below to get started:</p>
            <ol>
                <li>Step 1: Sign up for an account</li>
                <li>Step 2: Log in to your account</li>
                <li>Step 3: Complete your profile</li>
                <li>Step 4: Explore the features</li>
            </ol>
            <h2>Step 1: Sign up for an account</h2>
            <p>
                To sign up for an account, click on the "Sign Up" button on the homepage. Fill in the required information and click "Submit".
            </p>
            <img src="signup-diagram.png" alt="Sign Up Diagram" />
            <h2>Step 2: Log in to your account</h2>
            <p>
                Once you have signed up, you can log in to your account by clicking on the "Log In" button on the homepage. Enter your username and password and click "Submit".
            </p>
            <img src="login-diagram.png" alt="Log In Diagram" />
            <h2>Step 3: Complete your profile</h2>
            <p>
                After logging in, you will be redirected to your profile page. Complete your profile by providing additional information such as your name, email, and profile picture.
            </p>
            <img src="profile-diagram.png" alt="Profile Diagram" />
            <h2>Step 4: Explore the features</h2>
            <p>
                Once your profile is complete, you can start exploring the various features of our application. Feel free to navigate through the different sections and make use of the available functionalities.
            </p>
        </div>
    );
};

export default Instructions;