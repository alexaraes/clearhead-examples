jQuery(document).ready(function() {
	
	if (!jQuery('#cartHeader').html().indexOf('my cart (0)') > -1) {
		jQuery('#topCartContent').slideDown();
		jQuery('#topCartContent').prepend('<div class="welcomeBackDiv"><h1>Welcome Back!</h1><h3 class="cartDiv">Your cart is ready when you are.</h3><h6 class="contactInfo">Questions? Give us a call at 844.425.8368.</h6><h6 class="contactInfo"> M-F 9:00-5:00 CT</h6></div>');
		jQuery('.top-cart').css('z-index', 788);
		jQuery('.welcomeBackDiv').css({
			'height': '50px',
			'width': '320px',
			'text-align': 'left',
			'color': 'white',
			'margin-left': '5px',
			'background-color': 'rgb(54, 154, 190)',
			'padding': '15px 0 100px 15px',
			'box-sizing': 'border-box',
			'text-transform': 'none'
		});
		jQuery('.cartDiv').css({
			'color': 'white',
			'margin': '0 0 10px 0'
		});
		jQuery('.contactInfo').css({
			'font-style': 'italic',
			'text-transform': 'none'
		});
	}
});
	