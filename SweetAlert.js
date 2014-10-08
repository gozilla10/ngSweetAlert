/**
@fileOverview

@toc

*/

'use strict';

angular.module('oitozero.ngSweetAlert', [])
.factory('SweetAlert', [ function ( ) {

	var swal = window.swal;

	//public methods
	var self = {

		swal: function ( arg1, arg2, arg3 ) {
			swal( arg1, arg2, arg3 );
		},
		success: function(title, message) {
			swal( title, message, 'success' );
		},
		error: function(title, message) {
			swal( title, message, 'error' );
		},
		warning: function(title, message) {
			swal( title, message, 'warning' );
		},
		info: function(title, message) {	
			swal( title, message, 'info' );
		}
	};
	
	return self;
}]);

