# Lab8_Starter

## Name:

Christian Lee

## Check your understanding q's (FILL OUT)

1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

   1) Within a Github action that runs whenever code is pushed.

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.


   We wouldn't. The reason is that the "message" feature would probably interact with other components and has many moving parts.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters


   We would. Testing this sort of feature wouldn't involve many moving parts and is relatively straight forward.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?


   I would expect the tests to still run but not show anything in terms of UI.

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?


   We would want to utilize page.click() and use the selector for the settings page. This would allow us to start at the settings page, so we would have this in our beforeAll.
