## Quick start

1.  Make sure that you have Node v8 or above installed.
2.  Clone this repo using
3.  Move to the appropriate directory: `cd liftoff-assignment`.<br />
4.  Run `npm run setup` in order to install dependencies and clean the git repo.<br />
    _We auto-detect `yarn` for installing packages by default, if you wish to force `npm` usage do: `USE_YARN=false npm run setup`_<br />
    _At this point you can run `npm start` to see the example app at `http://localhost:3000`._
5.  Run `npm run clean` to delete the example app.


## Assignment
Questionnaire

1. Create a Data.js containing a JSON object representing questions, answer options and correct answers for a questionnaire.

2. Using this data create a form, iterating over the questions and answer options from the JSON.

3. The form should have “Submit” and “Clear” buttons for submitting and clearing the form respectively

4. Validations :  * All the questions should be answered , in case of a missing answer, the question should be highlighted

5. On submit of the form, calculate the correct and incorrect answers as well as display the results in the form of a simple bar chart. ( Highlight the incorrectly answered questions in red)

6. On clicking the “Clear” button should reset the form and clear the bar graph

7. Try and make the UI responsive (write custom CSS or use a third party CSS framework)

8. Preferred Stack : Angular or React + Redux

9. Push the code to a public github repository and deploy the application using on heroku, github or any free service of choice

