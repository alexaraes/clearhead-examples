jQuery(document).ready(function() {
	jQuery("#stickyDiv").hide();
	if(!jQuery('#cartHeader').html().indexOf('my cart (0)') > -1){

		!function(n){"use strict";function r(n){var r=i.exec(n.toString());if(!r)throw new TypeError("Multiline comment missing.");return r[1]}function t(n,r){return n.replace(c,function(n,t){for(var i=t.split("."),o=i.length,s=r,u=0;o>u;u++){if(s=s[i[u]],s===e)throw'tim: "'+i[u]+'" not found in '+n;if(u===o-1)return s}})}n.timpl=function(n,e){return t(n.call?r(n):n,e||{}).replace(/^\s+|\s+$/g,"")};var e,i=/\/\*!?(?:\@preserve)?[ \t]*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)[ \t]*\*\//,o="{{",s="}}",u="[a-z0-9_$][\\.a-z0-9_]*",c=new RegExp(o+"\\s*("+u+")\\s*"+s,"gi")}(window);


		var html = timpl(function () {/*
			<div id="containDiv">
				<div id="stickyDiv" class="visible">
					<div id="welcomeMsg">
						<h1 class="cartH">Welcome Back!</h1>
						<p class="cartP">We saved your cart for you.</p>
						<p class="cartP">Your shopping cart: <br>3 items</p>
					</div>
					<div class="itemDiv">
						<div class="itemDiv2">
							<div id="xDiv"><a class="xlink" href="#">x</a></div>
							<div id="productImgDiv">
								<img src="http://www.bludot.com/media/catalog/product/f/l/fl1_flaskt_as_cord_flask_table_lamp_ash_3.jpg">
							</div>
							<div id="productInfoDiv">
								<p class="productTitle">Flask Table Lamp</p>
								<p class="productInfo">$299.00</p>
								<p class="productInfo">Qty: 1</p>
							</div>
							<div id="btnDiv">
								<button class="btn" id="shopBtn"><a href="#">Continue Shopping</a></button>
								<button class="btn" id="cartBtn"><a href="http://www.bludot.com/checkout/cart/">VIEW CART</a></button><div class="arrowRight"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		*/});
		
		var stickyShow = function() {
			
			jQuery('#stickyDiv').animate({"right":0}, "slow");
			
			console.log('stickyShow fire');
		};

       	setTimeout(stickyShow, 3000);
       	jQuery('body').append(html);
		
		
			   

			
		
		jQuery('body').css('overflow-x', 'hidden');
		jQuery('img').css('width', '100%');

		jQuery('button a').css({'text-decoration': 'none', 'color': 'white'});

		jQuery('.xlink').css({
			'text-decoration': 'none',
			'color': 'black'
		});

		jQuery('.btn').css({
			'display': 'inline-block',
			'border': 'none',
			'height': '25px',
			'color': 'white',
			'margin': '0 0 0 10px',
			'padding': '0 5px 0  5px'
		});

		jQuery('#stickyDiv').css({
			'box-sizing': 'border-box',
			'font-family': 'Arial',
			'position': 'absolute',
			'bottom': 0,
			'right': '-600px',
			'z-index': 777,
			'background-color': 'rgb(54, 154, 190)'
		});

		jQuery('.cartP').css('margin', '15px 15px');

		jQuery('.cartH').css({
			'font-size': '25px',
			'margin': '15px 15px'
		});

		jQuery('#welcomeMsg').css({
			'text-align': 'left',
			'box-sizing': 'border-box',
			'padding': '0 10px',
			'background-color': 'rgb(54, 154, 190)',
			'color': 'white',
			'display': 'inline-block'
		});

		jQuery('.itemDiv').css({
			'box-sizing': 'border-box',
			'display': 'inline-block',
			'background-color': 'white',
			'width': '300px',
			'height': '100%',
			'padding': '0 5px 0 10px'
		});

		jQuery('#productImgDiv').css({
			'box-sizing': 'border-box',
			'width': '75px',
			'display': 'inline-block'
		});

		jQuery('#productInfoDiv').css({
			'box-sizing': 'border-box',
			'display': 'inline-block',
			'margin-left': '25px',
			'vertical-align': 'top'
		});

		jQuery('.productTitle').css({
			'box-sizing': 'border-box',
			'font-size': '14px',
			'margin-top': '5px',
			'color': 'black',
			'font-weight': 'bold'
		});

		jQuery('.productInfo').css({
			'box-sizing': 'border-box',
			'color': 'black',
			'text-align': 'left'
		});

		jQuery('#xDiv').css({
			'box-sizing': 'border-box',
			'text-align': 'right',
			'font-size': '18px'
		});

		jQuery('#btnDiv').css({
			'box-sizing': 'border-box',
			'margin': '20px 0 20px 0',
			'color': 'white !important'

		});

		jQuery('#cartBtn').css({
			'background-color': 'orange',
			'color': 'white !important',
			'text-decoration': 'none'
		});

		jQuery('#shopBtn').css({
			'margin-right': '30px',
			'width': '140px',
			'color': 'white !important',
			'text-decoration': 'none'
		});

		jQuery('.xlink, .btn').click(function() {
			jQuery('#stickyDiv').animate({"right":'-600px'}, "slow");
			//alert('{closed-modal|view-cart|checkout}');
		});
	}
});