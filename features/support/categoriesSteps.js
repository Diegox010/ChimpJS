"use strict";

module.exports = function () {

this.Given(/^a browser is at the automationpractice page$/, function () {
	browser.url('http://automationpractice.com/index.php');
});

this.When(/^the user clicks the Women category button$/, function () {
	browser.click("//a[@title='Women']");
});

this.Then(/^the browser redirects to the Women category page$/, function() {
	let url =  browser.getUrl();
	expect(url).toContain("id_category=3");
	console.log(browser.getUrl());
});

// this.When(/^the user clicks the Dresses category button$/, function () {
// 	browser.click('=Dresses');
// });

// this.Then(/^the browser redirects to the Dresses category page$/, function() {
// 	let url =  browser.getUrl();
// 	expect(url).toContain("id_category=9");
// 	console.log(browser.getUrl());
// });

// this.When(/^the user clicks the T-shirts category button$/, function () {
// 	browser.click('=T-shirts');
// });

// this.Then(/^the browser redirects to the T-shirts category page$/, function() {
// 	let url =  browser.getUrl();
// 	expect(url).toContain("id_category=5");
// 	console.log(browser.getUrl());
// });

}