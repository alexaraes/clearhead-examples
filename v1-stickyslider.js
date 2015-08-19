$(document).ready(function() {
	!function(n){"use strict";function r(n){var r=i.exec(n.toString());if(!r)throw new TypeError("Multiline comment missing.");return r[1]}function t(n,r){return n.replace(c,function(n,t){for(var i=t.split("."),o=i.length,s=r,u=0;o>u;u++){if(s=s[i[u]],s===e)throw'tim: "'+i[u]+'" not found in '+n;if(u===o-1)return s}})}n.timpl=function(n,e){return t(n.call?r(n):n,e||{}).replace(/^\s+|\s+$/g,"")};var e,i=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//,o="{{",s="}}",u="[a-z0-9_$][\\.a-z0-9_]*",c=new RegExp(o+"\\s*("+u+")\\s*"+s,"gi")}(window);
		
		var html = timpl(function () {/*
		<div id="stickyDiv">
			<div id="welcomeMsg">
				<h2>Welcome Back!</h2>
				<p class="cartP">We saved your cart for you.</p>
				<p class="cartP">Your shopping cart: <br>3 items</p>
			</div>
			<div class="itemDiv">
				<div id="xDiv"><a href="#">x</a></div>
				<div class="itemDiv2">
					<div id="productImgDiv">
						<img src="http://www.bludot.com/media/catalog/product/f/l/fl1_flaskt_as_cord_flask_table_lamp_ash_3.jpg">
					</div>
					<div id="productInfoDiv">
						<p class="productTitle">Flask Table Lamp</p>
						<p class="productInfo">$299.00</p>
						<p class="productInfo">Qty: 1</p>
					</div>
					<div id="btnDiv">
						<button id="shopBtn">Continue Shopping</button>
						<button id="cartBtn">VIEW CART</button><div class="arrowRight"></div>
					</div>
				</div>
			</div>
		</div>
		*/});

	jQuery('body').append(html);
	jQuery('img').css('width', '100%');
	jQuery('a').css({
		'text-decoration': 'none';
		'color': 'black';
	});
	jQuery('button').css({
		'display': 'inline-block';
		'border': 'none';
		'height': '25px';
		'color': 'white';
	});
	jQuery('#stickyDiv').css({
		'box-sizing': 'border-box';
		'font-family': 'Arial';
		'position': 'absolute';
		'bottom': 0;
		'right': 0;
		'z-index': 777;
	});
	jQuery('#cartP').css('margin-bottom', '8px');
	jQuery('#welcomeMsg').css({
		'box-sizing': 'border-box';
		'padding': '10px 10px 10px 30px';
		'background-color': 'rgb(54, 154, 190)';
		'color': 'white';
		'display': 'inline-block';
		'width': '240px';
		'height': 100%;
	});
	jQuery('.itemDiv').css({
		'box-sizing': 'border-box';
		'display': 'inline-block';
		'background-color': 'white';
		'width': '300px';
		'height': 100%;
		'padding': '20px 0 10px 30px';
	});
	jQuery('#productImgDiv').css({
		'box-sizing': 'border-box';
		'width': '75px';
		'display': 'inline-block';
	});
	jQuery('#productInfoDiv').css({
		'box-sizing': 'border-box';
		'display': 'inline-block';
		'margin-left': '25px';
	});
	jQuery('.productTitle').css({
		'box-sizing': 'border-box';
		'font-size': '14px';
	});
	jQuery('.productInfo').css({
		'box-sizing': 'border-box';
		'color': 'gray';
	});
	jQuery('#xDiv').css({
		'box-sizing': 'border-box';
		'text-align': 'right';
		'padding': '15px 10px 0 0';
	});
	jQuery('#btnDiv').css({
		'box-sizing': 'border-box';
		'margin-top': '10px';
	});
	jQuery('#cartP').css('background-color', 'orange';);
	jQuery('#cartP').css('margin-right', '30px';);

	if (!$('#cartHeader').html().indexOf('my cart (0)') > -1) {
		jQuery('#stickyDiv').hide();
			setTimeout(function(){
		        jQuery('#stickyDiv').animate({width:'toggle'},1000);
		    },3000);
	}
});