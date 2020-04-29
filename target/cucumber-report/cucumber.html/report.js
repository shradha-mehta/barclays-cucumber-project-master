$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/uk/co/barclays/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login page feature",
  "description": "As a user I want to navigate to login page into barclays website",
  "id": "login-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.before({
  "duration": 17778763200,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "login-page-feature;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I should navigate to page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 101087800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 11415393400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToPageSuccessfully()"
});
formatter.result({
  "duration": 68670200,
  "status": "passed"
});
formatter.after({
  "duration": 719129200,
  "status": "passed"
});
formatter.before({
  "duration": 12009899800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User should not login without entering membership details",
  "description": "",
  "id": "login-page-feature;user-should-not-login-without-entering-membership-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter surname \"Patel\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on next step",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error Message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 118800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 14333455400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patel",
      "offset": 17
    }
  ],
  "location": "LoginSteps.iEnterSurname(String)"
});
formatter.result({
  "duration": 103419900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnNextStep()"
});
formatter.result({
  "duration": 642693300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldSeeTheErrorMessage()"
});
formatter.result({
  "duration": 58866900,
  "status": "passed"
});
formatter.after({
  "duration": 715522800,
  "status": "passed"
});
formatter.uri("src/test/java/uk/co/barclays/resources/featurefile/register.feature");
formatter.feature({
  "line": 2,
  "name": "Register page feature",
  "description": "As a user I want to navigate to Registration page into barclays website",
  "id": "register-page-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Register"
    }
  ]
});
formatter.before({
  "duration": 14799949400,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to registration page successfully",
  "description": "",
  "id": "register-page-feature;user-should-navigate-to-registration-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to register page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 43100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 14676593500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToRegisterPageSuccessfully()"
});
formatter.result({
  "duration": 49722400,
  "status": "passed"
});
formatter.after({
  "duration": 687908600,
  "status": "passed"
});
formatter.before({
  "duration": 12298682000,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "User should navigate to user details page successfully",
  "description": "",
  "id": "register-page-feature;user-should-navigate-to-user-details-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on start button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should navigate to your details page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 28500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 12274575300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iClickOnStartButton()"
});
formatter.result({
  "duration": 103473300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterSteps.iShouldNavigateToYourDetailsPageSuccessfully()"
});
formatter.result({
  "duration": 208065800,
  "status": "passed"
});
formatter.after({
  "duration": 698548500,
  "status": "passed"
});
});