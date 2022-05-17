const LoginScreen = require("../screens/login_screen");
const SideNavigator = require("../components/side_navigator");


const email = 'qqvireal+1@gmail.com';
const password = 'strongPassword!Kekw123'

Feature('Login test');
Scenario('Login as a created user', ({ I }) => {
    I.amOnPage(LoginScreen.loginScreenURL);
    I.seeElement(LoginScreen.oneSoilLogo);
    I.fillField(LoginScreen.emailInputField, email);
    I.fillField(LoginScreen.passwordInputField, password);
    I.click(LoginScreen.signInSubmitButton)
    I.seeElement(SideNavigator.sideNavigatorContainer);
});