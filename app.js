var myApp = angular.module("myApp", ["ngRoute","ngAnimate","ngDialog"]);

myApp.config(function($routeProvider) {
	$routeProvider
		.when("/books", {
			templateUrl: "partials/book-list.html",
			controller: "BookListCtrl"
		})
		.when("/kart", {
			templateUrl: "partials/kart-list.html",
			controller: "KartListCtrl"
		}).
		when("/link1", {
			templateUrl: "partials/link1.html",
			controller: "LinkController"
		}).
		when("/signin", {
			templateUrl: "partials/signin.html",
			controller: "Signincontroller"
		})
	.otherwise({
		redirectTo: "/books"
	});
});


myApp.controller('LinkController', function($scope,bookService,kartService){
$scope.orders = kartService.getOrder();	
});

myApp.controller('Signincontroller', function($scope,bookService,kartService){

});

myApp.factory("bookService", function() {
	
	var books = [
	
	{
			imgUrl: "adultery.jpeg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House India",
			releaseDate: "12-08-2014"
			
		},
		{
			imgUrl: "geronimo.jpeg",
			name: "Geronimo Stilton Spacemice#2 : You're Mine, Captain!",
			price: 168,
			rating: 5,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2014",
			avilableplace:"kolkata"
		},
		{
			imgUrl: "life-or-death.jpeg",
			name: "Life or Death",
			price: 339,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette India",
			releaseDate: "01-04-2014",
			avilableplace:"kolkata"
		},
		{
			imgUrl: "playing.jpeg",
			name: "Playing It My Way : My Autobiography",
			price: 599,
			rating: 5,
			binding: "Hardcover",
			publisher: "Hodder & Stoughton",
			releaseDate: "01-08-2014",
			avilableplace:"kolkata"
		},
		{
			imgUrl: "the-fault.jpeg",
			name: "The Fault in Our Stars",
			price: 227,
			rating: 4.5,
			binding: "Paperback",
			publisher: "Penguin Books Ltd",
			releaseDate: "25-01-2013",
			avilableplace:"kolkata"
		},
		{
			imgUrl: "wings-of-fire.jpeg",
			name: "Wings of Fire: An Autobiography",
			price: 124,
			rating: 5,
			binding: "Paperback",
			publisher: "Universities Press",
			releaseDate: "25-08-2000",
			avilableplace:"kolkata"
		}];
	
	return {
		getBooks: function() {
			return books;
		}
		
	}
});
myApp.factory("kartService", function() {
	var kart = [];
	var orders = [];
	console.log(kart);

	
	return {
		getKart: function() {
			return kart;
		},
		addToKart: function(book) {
			kart.push(book);
			//console.log(book.imgUrl);
			// len = kart.length;
			// console.log(len);
			// var i=0;
			// do{
			// 	kart.push(book);
			// 	i++;
			// }
			// while(book.imgUrl != kart[i].imgUrl);
			// for(var i=0;i<len-1;i++){
			// 	if(book.imgUrl != kart[i].imgUrl){
			// 		kart.push(book);

			// 	};
			// }

			//kart.push(book);
		},
		getOrder: function(){
			return orders;
		},
		buy: function(book) {
			orders.length = 0;
			orders.push(book);
			console.log(orders)
			
		 }
	}
});

myApp.controller("KartListCtrl", function($scope, kartService) {
	
	$scope.kart = kartService.getKart();
	
	$scope.buy = function(book) {
		kartService.buy(book);
	}
	$scope.remove = function(book){
		var index = $scope.kart.indexOf(book);
		$scope.kart.splice(index,1);
		
	}
});

myApp.controller("HeaderCtrl", function($scope) {
	$scope.appDetails = {};
	$scope.appDetails.title = "logo.gif";
	$scope.appDetails.tagline = "We have collection of 1 Million books";
});




myApp.controller("BookListCtrl", function($scope, bookService, kartService,ngDialog) {
	


	$scope.books = bookService.getBooks();
	
	
	$scope.addToKart = function(book) {
	
		kartService.addToKart(book);
	
	}
	
	

	$scope.buy=function(book){
  
            kartService.buy(book);
           ngDialog.open({
           template: 'popupTmpl.html',
           	className: 'ngdialog-theme-plain',
       		controller:'dialogCtrl'
          
         
        });
        
return buy;
   
}
});

myApp.controller('dialogCtrl',function($scope, bookService, kartService){
	$scope.orders = kartService.getOrder();
});