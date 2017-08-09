package cucumberJava;

import org.apache.log4j.Logger;

import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import cucumber.runtime.PendingException;
import junit.framework.Assert;

public class cucumberJava {

	final static Logger logger = Logger.getLogger(cucumberJava.class);
	
	/*Add some comments*/
	/*add fix comment*/
	/*Add 2 second comments*/
	/*add another*/


	private MyService service;
	private boolean success;

	@Given("^my service exists$")
	public void my_service_exists() throws Throwable {
		service = new MyService();
		logger.info("This is info : my service exists ");
	}

	@When("^I call my service$")
	public void i_call_my_service() throws Throwable {
		success = service.doSomething();
		logger.info("This is info : I call my service ");
	}

	@Then("^it should have been a succes$")
	public void it_should_have_been_a_succes() {
		Assert.assertTrue(success);
		logger.info("This is info : it should have been a succes ");
	}
}