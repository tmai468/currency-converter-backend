# English Currency Conversion Tool
This is a web app that implements taking any given user input, and, if that user input is a valid currency value, displays a string holding the input value's English currency representation in words.

The web app is made using JavaScript React, with a simple Express backend. The web app is deployed on Heroku for user's ease of use. 

You can find the hosting URL of the app here:
https://obscure-mesa-03899.herokuapp.com/

## Code Navigation:
All source code for the frontend can be found in folder ```currency-converter```. The frontend can be started separately on local machine's port 3000 by running ```npm start``` from the frontend folder's root directory. 

The code for the basic Express server for the backend can be found in folder ```currency-converter-backend```, although due to the simple nature of the application, the purpose of the backend is only for production deployment.

## Solution Description:
The web application, though simple, has the following functionalities:

* Conversion from numeric to English natural language currency representation of input.
* Input validation and automatically overwriting invalid input with valid representation:

    + For example, if the user inputs ```12,000``` (which should be ```12000```), upon form submission, the commas are replaced out and the user still gets the correct English currency representation of ```12000``` in words.
    + Different logical conditionals to dynamically generate insightful error messages to the user, to enforce:
        + Valid positive input value
        + Valid numeric value (avoiding input of non-numeric characters (besides commas))
        + Cases when the user's input is below 1, and the ```0``` character is truncated (e.g ```.65```), the app still generates correct word representation.
        + Edge cases are accounted for with a ***test-driven development workflow***.
* The application is thoroughly tested using unit testing framework Jest. Due to the nature of the main input form component (this main component receives as props handlers to modify states of the sub-components ```Notification``` and ```OutputDiv```), it suffices to implement thorough unit tests for this main ```<InputForm />``` component and validate the inputs passed to these props handlers, and we shall not need end-to-end testing for different components' interactions. This keeps the application simpler.

### Instructions to run unit tests:
1. Navigate to the frontend's root folder.
2. Run ```npm test``` to run all the unit tests.
3. Run ```npm test -- -t ${test-name}``` to run any specific test individually.

## Assumptions:
* Input validation:
    + The web app ***truncates*** the user's input past the second decimal point, and there is a corresponding notification informing them of the correct currency format, if they input over 2 decimal points (```100 cents equal 1 dollar```). This is an area for possible future improvements, as the web app could've also seeked to convert the cents value (numeric value after the decimal point) to dollar value and adding them on top of each other recursively.
    + The web app assumes that by an input such as ```12,000``` (with the comma in between), the user means to input ```12000```. This can be confusing to some users who use ```,``` instead of ```.``` to represent decimal character.
    

