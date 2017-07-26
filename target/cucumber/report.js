$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('cucumberJava\cucumberJava.feature');
formatter.feature({
  "id": "features-of-my-service",
  "description": "",
  "name": "Features of my service",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "features-of-my-service;calling-my-service",
  "description": "",
  "name": "Calling my service",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "my service exists",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "I call my service",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "it should have been a succes",
  "keyword": "Then ",
  "line": 6
});
formatter.match({
  "location": "cucumberJava.my_service_exists()"
});
formatter.result({
  "duration": 149694103,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.i_call_my_service()"
});
formatter.result({
  "duration": 801604,
  "status": "passed"
});
formatter.match({
  "location": "cucumberJava.it_should_have_been_a_succes()"
});
formatter.result({
  "duration": 2191478,
  "status": "passed"
});
});