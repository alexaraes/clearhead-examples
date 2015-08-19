jQuery(document).ready(function() {
	
	if (!jQuery('#cartHeader').html().indexOf('my cart (0)') > -1) {
		
		// https://raw.githubusercontent.com/clearhead/timpl/master/timpl.min.js
		!function(n){"use strict";function r(n){var r=i.exec(n.toString());if(!r)throw new TypeError("Multiline comment missing.");return r[1]}function t(n,r){return n.replace(c,function(n,t){for(var i=t.split("."),o=i.length,s=r,u=0;o>u;u++){if(s=s[i[u]],s===e)throw'tim: "'+i[u]+'" not found in '+n;if(u===o-1)return s}})}n.timpl=function(n,e){return t(n.call?r(n):n,e||{}).replace(/^\s+|\s+$/g,"")};var e,i=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//,o="{{",s="}}",u="[a-z0-9_$][\\.a-z0-9_]*",c=new RegExp(o+"\\s*("+u+")\\s*"+s,"gi")}(window);
		
		var html = timpl(function () {/*
		<div class="welcomeBackDiv">
			<h1>Welcome Back!</h1>
			<h3 class="cartDiv">Your cart is ready when you are.</h3>
			<h6 class="contactInfo">Questions? Give us a call at {{phone}}.</h6>
			<h6 class="contactInfo"> M-F 9:00-5:00 CT</h6>
		</div>
		*/}, {
			phone: '844.425.8368'
		});
		
		jQuery('#topCartContent').slideDown();
		jQuery('#topCartContent').prepend(html);
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
	
