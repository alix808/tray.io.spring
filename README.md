https://tray-io-alex-gilbert.herokuapp.com/


For this test, I used a minimum number of third party llibraries, so I could focus on developing my own API and write custom CSS classes.

The AuthState.js file contains re-usable functions which are particularly useful for sign-up / log-in forms. For example, consider the following function.

```javascript

  const checkOne = password => {
    var re = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])');

    if (re.test(password)) {
      return true;
    }

    return false;
  };
  
  ```
  
This function checks that the password contains at least one number, one lowercase letter, & one uppercase letter—all of these checks will be required in the future when the user logs in to the app with a sign in form. Thus it was strategically placed in the AuthState.js file so that a sign-in react components can access it through the Context API.

