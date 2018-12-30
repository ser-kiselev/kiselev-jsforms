$(document).ready(function() {

	var checkRegistration = (function(){

		// Module variables
		var _registrationForm = $('#registrationForm');

		// Module start method
		var init = function(){
			// Run listening of events
			_setUpListeners();
		}

		// listening of events
		var _setUpListeners = function(){
			_registrationForm.on('submit', function(e){
				_registrationFormValidate(e);
			});
		}

		// Private methods
		var _registrationFormValidate = function(e){

			// Cancel the default browser action
			e.preventDefault();

			var _inputEmail = $('#inputEmail'),
				_inputPassword = $('#inputPassword'),
				_inputEmailVal = _inputEmail.val().trim(),
				_inputPasswordVal = _inputPassword.val().trim(),
				// Error tooltips variables
				_enterEmail = $('#enterEmail'),
				_invalidEmail = $('#invalidEmail'),
				_enterPassword = $('#enterPassword'),
				_emailOccupied = $('#emailOccupied');

			// Check inputs
			if ( _inputEmailVal.length === 0 ) {
				_enterEmail.fadeIn(500);
				
			} else {

				var _pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

				if ( _pattern.test( _inputEmailVal ) ) {
					
					if ( _inputPasswordVal.length === 0 ) {
						_enterPassword.fadeIn(500);
					} else {

						if ( _inputEmailVal === 'mail@mail.com' ) {
							_emailOccupied.fadeIn(500);
						} else {
							_registrationForm.unbind('submit').submit();
						}

					}

				} else {
					_invalidEmail.fadeIn(500);
				}
			}

			// Hide errors while typing
			_inputEmail.keypress(function(){
				_enterEmail.fadeOut();
				_invalidEmail.fadeOut();
				_emailOccupied.fadeOut();
			});

			_inputPassword.keypress(function(){
				_enterPassword.fadeOut();
			});

		}

		// Return init method
		return {
			init
		}

	}());

	// Run checkLogin module
	checkRegistration.init();

});
