/* Creating new element */

function createCard(elem, elem_image, elem_caption, elem_price, elem_button){
	let parent = document.querySelector('.list_products');	
	let new_card = document.createElement('div');
	new_card.classList.add('card');
	parent.appendChild(new_card);
	
	/* Add image */
    let card_image = document.createElement('img');
    card_image.classList.add('card_image');
    card_image.src = elem_image;
    new_card.appendChild(card_image);
	
	/* Add caption */
	let card_caption = document.createElement('div');
	card_caption.classList.add('card_caption');
    card_caption.innerHTML = elem_caption;
	new_card.appendChild(card_caption);
	
	/* Add price */
	let card_price = document.createElement('div');
    card_price.classList.add('card_price');
	card_price.innerHTML = elem_price;
	new_card.appendChild(card_price);

    /* Add button */
	let card_button= document.createElement('button');
    card_button.classList.add('card_button');
	card_button.innerHTML = 'Order'
	new_card.appendChild(card_button);
}	


/* function load */
function load(){
	for(let product of products){
	 	createCard(product, product.image, product.caption, product.price, product.button)
}
}
