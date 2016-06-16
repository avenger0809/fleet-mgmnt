( function () {
	'use strict'

	angular
	.module('runbus')
	.controller('PickUpDropController', PickUpDropController);

	PickUpDropController.$inject = ['$location', '$rootScope', 'FlashService','$http', '$filter'];
	function PickUpDropController( $location, $rootScope, FlashService, $http, $filter ) {
		var vm = this;
	  	vm.SetLocation = SetLocation;
  		var date = new Date();
    	vm.HHmmss = $filter('date')(new Date(), 'HH:mm');
    	vm.date = $filter('date')(new Date(), 'EEEE, MMMM dd yyyy');
	  	function SetLocation() { 
	  		
            console.log( $('.pick-up').text() );
	        console.log( $('.drop-off').text() );
	        sessionStorage.setItem('pick-up', $('.pick-up').text());
	        sessionStorage.setItem('drop-off', $('.drop-off').text());
	    }


	}

})();