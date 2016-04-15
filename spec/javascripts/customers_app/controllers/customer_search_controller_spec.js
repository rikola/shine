describe("CustomerSearchController", function() {
	describe("Initilization", function() {

		// Setup code

		var scope = null, controller = null;

		beforeEach(module("customers"));

		beforeEach(inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();
			controller = $controller("CustomerSearchController", {
				$scope: scope
			});
		}));

		// tests go here...

		it("defaults to an empty customer list", function() {
			expect(scope.customers).toEqualData([]);
		});

	});

	describe("Fetching Search Results", function() {
		beforeEach(module("customers"));

		beforeEach(function() {
			httpBackend.when('GET','/customers.json?keywords=bob&page=9').respond(serverResults);
		});

		var scope = null,
			controller = null,
			httpBackend = null,
			serverResults = [
				{
					id: 123,
					first_name: "Bob",
					last_name: "Jones",
					email: "bjones@foo.net",
					username: "jonesy"
				}, {
					id: 456,
					first_name: "Bob",
					last_name: "Johnsons",
					email: "johnboy@bar.info",
					username: "bobbyj"
				}
			];

		beforeEach(inject(function($controller, $rootScope, $httpBackend) {
			scope = $rootScope.$new();
			httpBackend = $httpBackend;
			controller = $controller("CustomerSearchController", {
				$scope: scope
			});
		}));
	});
});