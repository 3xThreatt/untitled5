
//Reference: Lei Song @ Unitec // 
/**
 * Author: Lei Song
 * Date: 2019-05-25
 * Version: 1.0
 * Purpose: create JavaScript for all web pages
 */

/**
 * Purpose: left animation, cart and invoice
 * 
 * @returns
 */

function moveAd() {        // move the location of the invoice and side image//
	left = 0;
	setInterval(function() {
		image = document.getElementById("sideImage");
		image.style.left = left + "px";
		left--;
		if (left == -400) {
			left = 0;
		}
	}, 50);
}

function moveText() { // move the text //
	top1 = -400;
	textNo = 1;
	setInterval(function() {
		if (textNo == 1) {// Various math used to rotate and displace text //
			text = document.getElementById("text1");
			text.style.display = "inline";
			text.style.top = top1 + "px";
			top1++;
			if (top1 == -100) {
				textNo = 2;
				top1 = -400;
				text.style.display = "none";
			}
		} else {         // Various math used to rotate and displace text //
			text = document.getElementById("text2");
			text.style.display = "inline";
			text.style.top = top1 + "px";
			top1++;
			if (top1 == -100) {
				textNo = 1;
				top1 = -400;
				text.style.display = "none";
			}
		}

	}, 50);
}

function addToCart(e) {
	cart = document.getElementById("cartDiv");   //variable pulled off carDiv class from html //
	switch (e.id) {
	case "addBread":
		qty = document.getElementById("breadQty").value;   //quantity pulled from number input from html //
		cart
				.insertAdjacentHTML(
						'beforeend',
						'<p>Food: <input type="number" class="cartInput" id = "cartBread" pName = "Bread" price="3.2" value="'
								+ qty
								+ '"> :$'
								+ (Number(qty) * 3.2)
								+ '</p>');   //subtotal is calculated and printed on cart
		break;
	case "addCheese":
		qty = document.getElementById("cheeseQty").value;
		cart
				.insertAdjacentHTML(
						'beforeend',
						'<p>Food: <input type="number" class="cartInput" id = "cartCheese" pName = "Cheese" price="2.9" value="'
								+ qty
								+ '"> :$'
								+ (Number(qty) * 2.9)
								+ '</p>');//subtotal is calculated and printed on cart
		break;
	case "addSpread":
		qty = document.getElementById("spreadQty").value;
		cart
				.insertAdjacentHTML(
						'beforeend',
						'<p>Food: <input type="number" class="cartInput" id = "cartSpread" pName = "Spread" price="9" value="'
								+ qty
								+ '"> :$'
								+ (Number(qty) * 9)
								+ '</p>');//subtotal is calculated and printed on cart
		break;
	case "addMilk1":
		qty = document.getElementById("milk1Qty").value;
		cart
				.insertAdjacentHTML(
						'beforeend',
						'<p>Food: <input type="number" class="cartInput" id = "cartMilk1" pName = "Milk1" price="4.5" value="'
								+ qty
								+ '"> :$'
								+ (Number(qty) * 4.5)
								+ '</p>');//subtotal is calculated and printed on cart
		break;
	case "addMilk2":
		qty = document.getElementById("milk2Qty").value;
		cart
				.insertAdjacentHTML(
						'beforeend',
						'<p>Food: <input type="number" class="cartInput" id = "cartMilk2" pName = "Milk1" price="2.32" value="'
								+ qty
								+ '"> :$'
								+ (Number(qty) * 2.32)
								+ '</p>');//subtotal is calculated and printed on cart
		break;
	default:
		// code block
	}

}

function addToInvoice() {
	
}

/**
 * Show invoice page
 */
function invoice() {
	
	voicePage = document.getElementById("voicePage");
	//Get the button that opens the modal
	var btn = document.getElementById("showInvoiceBut");

	//Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	//When the user clicks on the button, open the modal 
	btn.onclick = function() {
		cart = document.getElementsByClassName("cartInput");
		voiceContent = document.getElementById("voice-content");
		Total = 0;
		var elems = document.getElementsByClassName("items");
		i = 0
		while (i<elems.length){
			elems[i].parentNode.removeChild(elems[i]);
		}
		
		
		i = 0;//simple parsing function made to print all values on cart //
		while (i < cart.length) {
			console.log(cart[i].id);
			qty = cart[i].value;
			switch (cart[i].id) {
			case "cartBread":
				voiceContent.insertAdjacentHTML(
								'beforeend',
								'<p class = "items">Food: Qty:'+ qty +' Price:$' + (Number(qty) * 3.2)+ '</p>');
				Total += (Number(qty) * 3.2);//Calculates total //
				break;
			case "cartCheese":
				voiceContent.insertAdjacentHTML(
						'beforeend',
						'<p class = "items">Food: Qty:'+ qty +' Price:$' + (Number(qty) * 2.9)+ '</p>');
				Total += (Number(qty) * 2.9);//Calculates total //
				break;
			case "cartSpread":
				voiceContent.insertAdjacentHTML(
						'beforeend',
						'<p class = "items">Food: Qty:'+ qty +' Price:$' + (Number(qty) * 9)+ '</p>');
				Total += (Number(qty) * 9);//Calculates total //
				break;
			case "cartMilk1":
				voiceContent.insertAdjacentHTML(
						'beforeend',
						'<p class = "items">Food: Qty:'+ qty +' Price:$' + (Number(qty) * 4.5)+ '</p>');
				Total += (Number(qty) * 4.5);//Calculates total //
				break;
			case "cartMilk2":
				voiceContent.insertAdjacentHTML(
						'beforeend',
						'<p class = "items">Food: Qty:'+ qty +' Price:$' + (Number(qty) * 2.32)+ '</p>');
				Total += (Number(qty) * 2.32);//Calculates total //
				break;
			default:
				// code block
			}
			
			i++;

		}
		//Custom code: Jamie Dyet @ unitec //
		Other = Total + 20   //total plus delivery cost //
		if (Total > 300){ //if the user spends more than $300 //
		voiceContent.insertAdjacentHTML(
				'beforeend',
				'<br><p class = "items">Food: $'+ Total+'</p>'); 
		voiceContent.insertAdjacentHTML(
				'beforeend',
				'<p class = "items">Delivery: $'+ 0+'</p>')
		voiceContent.insertAdjacentHTML(
				'beforeend',
				'<p class = "items"><b>Total: $'+ Total+'</b></p>'); //total is added less delivery//
	}	else {   //anything else //
		voiceContent.insertAdjacentHTML(
				'beforeend',
				'<br><p class = "items">Food: $'+ Total+'</p>');
		voiceContent.insertAdjacentHTML(
				'beforeend',
				'<p class = "items">Delivery: $'+ 20+'</p>');
		voiceContent.insertAdjacentHTML(
				'beforeend',
				'<p class = "items"><b>Total: $'+ Other+'</b></p>');//total is added plus delivery//

	}
		
		voicePage.style.display = "block";
	}

	//When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		voicePage.style.display = "none";
	}

	//When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == voicePage) {
			voicePage.style.display = "none";
		}
	}
}
