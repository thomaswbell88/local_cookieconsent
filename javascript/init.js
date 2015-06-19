(function($) {
	$(document).ready(function () {  
		$.cookieBar(
			{
				message: '<span class="message">Like most websites we use \'cookies\'. If you\'re happy with that, just click close and carry on as normal</span>', //Message displayed on bar
				acceptButton: true, //Set to true to show accept/enable button
				acceptText: '<span class="btn-small"><i class="fa fa-times"></i> Close</span>', //Text on accept/enable button
				policyButton: true, //Set to true to show Privacy Policy button
				policyText: '<span class="btn-small">Find out more</span>', //Text on Privacy Policy button
				policyURL: '//learn.unitedforwildlife.org/assets/cookies.php', //URL of Privacy Policy
				autoEnable: true, //Set to true for cookies to be accepted automatically. Banner still shows
				acceptOnContinue: false, //Set to true to silently accept cookies when visitor moves to another page
				expireDays: 365, //Number of days for cookieBar cookie to be stored for
				element: 'body', //Element to append/prepend cookieBar to. Remember "." for class or "#" for id.
			}
		);
	});
})(jQuery);

