$(document).ready(function() {

	var checkLogin = (function(){

		// Module variables
		var _loginForm = $('#loginForm'),
			_enterEmail = $('#enterEmail'),
			_invalidEmail = $('#invalidEmail'),
			_enterPassword = $('#enterPassword'),
			_invalidEmailPassword = $('#invalidEmailPassword');

		// Module start method
		var init = function(){

			// Run listening of events
			_setUpListeners();

		}

		// listening of events
		var _setUpListeners = function(){

			_loginForm.on('submit', function(e){
				_loginFormValidate(e);
			});

		}

		// Private methods
		var _loginFormValidate = function(e){

			// Cancel the default browser action
			e.preventDefault();

			var _inputEmail = $('#inputEmail'),
				_inputPassword = $('#inputPassword'),
				_inputEmailVal = _inputEmail.val().trim(),
				_inputPasswordVal = _inputPassword.val().trim();

			// Check input email
			if ( _inputEmail ) {

				if ( _inputEmailVal.length === 0 ) {
					_enterEmail.fadeIn(500);
				} else {
					var _pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
					if ( _pattern.test( _inputEmailVal ) ) {
						_invalidEmail.fadeOut(200);
						if ( _inputEmailVal !== 'mail@mail.com' || _inputPasswordVal !== '123' ) {
							_invalidEmailPassword.fadeIn(500);
						} else {
							_invalidEmailPassword.fadeOut();
							_loginForm.unbind('submit').submit();
						}
					} else {
						_invalidEmail.fadeIn(500);
					}
				}

			}

			// Check input password
			if ( _inputPassword ) {

				if ( _inputPasswordVal.length === 0 ) {
					_enterPassword.fadeIn(500);
				} else {
					_enterPassword.fadeOut();
				}

			}

			// Hide Errors
			_inputEmail.keypress(function(){
				_enterEmail.fadeOut();
				_invalidEmail.fadeOut();
				_invalidEmailPassword.fadeOut();
			});

			_inputPassword.keypress(function(){
				_enterPassword.fadeOut();
				_invalidEmailPassword.fadeOut();
			});

		}

		// Return init method
		return {
			init
		}

	}());

	// Run checkLogin module
	checkLogin.init();

});