@watch
Feature: Category check
	As a developer
	I want to make sure the category buttons redirect to the indicated page
	So that the user has easy access to what they're looking for

	Scenario: Women category
		Given a browser is at the automationpractice page
		When the user clicks the Women category button
		Then the browser redirects to the Women category page

	# Scenario: Dresses category
	# 	Given a browser is at the automationpractice page
	# 	When the user clicks the Dresses category button
	# 	Then the browser redirects to the Dresses category page

	# Scenario: Tshirts category
	# 	Given a browser is at the automationpractice page
	# 	When the user clicks the T-shirts category button
	# 	Then the browser redirects to the T-shirts category page
