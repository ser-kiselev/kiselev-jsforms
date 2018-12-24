$(document).ready(function() {

	var checkComment = (function(){

		// Module variables
		var _form = $('#commentAddForm'),
			_commentErrorTooltip = $('#commentError'),
			_textarea = _form.find('textarea');

		// Module start method
		var init = function(){

			// Run listening of events
			_setUpListeners();

		}

		// listening of events
		var _setUpListeners = function(){

			_form.on('submit', function(e){
				_commentFormValidate(e);
			});

		}

		// Private methods
		var _commentFormValidate = function(e) {

			var _textareaVal = _textarea.val().trim();

			// Check the length of the textarea value
			if ( _textareaVal.length === 0 ) {

				// Cancel the default browser action
				e.preventDefault();
				//Show tooltip if the field textarea is empty
				_commentErrorTooltip.fadeIn(500);
				// Hide the tooltip when writing text
				_textarea.keypress(function(){
					_commentErrorTooltip.fadeOut();
				});
			}

		}

		// Return init method
		return {
			init
		}
	
	}());

	// Run checkComment module
	checkComment.init();

});