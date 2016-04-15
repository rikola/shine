describe("Testing Jasmine", function() {
	it("can run a test", function() {
		expect(true).toBe(true);
	});
});

module("customers");
inject(function($controller, $rootScope) {
	var scope = $rootScope.$new();
	var controller = $controller("CustomerSearchController", { "$scope": scope });
});
