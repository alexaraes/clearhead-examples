jQuery(document).ready(function() {
	if (!jQuery('#cartHeader').html().indexOf('my cart (0)') > -1) {
		jQuery('#topCartContent').prepend('<div class="welcomeBackDiv"><h1>Welcome Back!</h1><h3 class="stickyDiv">We saved your cart for you.</h3><h3 "stickyDiv">Your shopping cart: 3 items</h3></div>');

		jQuery('#topCartContent').animate({width:'toggle'},3000);

		jQuery('.top-cart').css('z-index', 788);
		jQuery('#topCartContent').css({'margin-right':'-50px', 'float': 'right', 'display': 'inline-block'});
		jQuery('.welcomeBackDiv').css({
			'float': 'right',
			'height': '50px',
			'width': '320px',
			'text-align': 'left',
			'color': 'white',
			'margin-left': '5px',
			'background-color': 'rgb(54, 154, 190)',
			'padding': '15px 0 100px 15px',
			'box-sizing': 'border-box',
			'text-transform': 'none',
			'display': 'inline-block'
		});
		jQuery('.stickyDiv').css({
			'color': 'white',
			'margin': '0 0 10px 0'
		});
	}
});