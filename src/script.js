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
	let info_all=document.querySelector('.info_all');
	info_all.classList.add('active');
}


/* Load invisible elements */

let btn_load=document.getElementById('btn_load');
let shop_main=document.querySelector('.shop_main');
let block_products=document.querySelector('.block_products');
let list_products=document.querySelector('.list_products');
btn_load.addEventListener('click', loadCards);
function loadCards(){
	let height1 = shop_main.offsetHeight;
    let newHeight1 = height1 + 380;
    shop_main.style.height = newHeight1+ 'px';

	let height2 = block_products.offsetHeight;
    let newHeight2 = height2 + 420;
    block_products.style.height = newHeight2 + 'px';

	let height3 = list_products.offsetHeight;
    let newHeight3 = height3 + 380;
    list_products.style.height = newHeight3 + 'px';

	window.scrollBy(0, 420);
	let newHeight4=block_products.offsetHeight;
	console.log(newHeight4);
	if (newHeight4>6567){
		btn_load.disabled=true;
		btn_load.style.backgroundColor='gray';
	}

	
}

let info_fruits=document.querySelector('.info_fruits');
info_fruits.addEventListener('click', showFruits);
function showFruits(){
	info_fruits.classList.add('active');
	info_vegetables.classList.remove('active');
	info_dairy_products.classList.remove('active');
	info_dried_fruits.classList.remove('active');
	info_oil.classList.remove('active');
	info_all.classList.remove('active');
	let cards=document.querySelectorAll('.card');
	regex=/Apple|Apricot|Avocado|Banana|Kiwi|Lemon|Mango|Orange|Peach|Pear|Pineapple|Plum|Pomegranate|Tangerine/
	for(let card of cards){
		if (regex.test(card.innerHTML)){
			card.style.display='flex';
			shop_main.style.height='2700px';
			block_products.style.height='2200px';
			list_products.style.height='2000px';
			btn_load.disabled=true;
			btn_load.style.backgroundColor='gray';
		}else{
			card.style.display='none';
		}
	}

}



let info_vegetables=document.querySelector('.info_vegetables');
info_vegetables.addEventListener('click', showVegetables);
function showVegetables(){
	info_fruits.classList.remove('active');
	info_vegetables.classList.add('active');
	info_dairy_products.classList.remove('active');
	info_dried_fruits.classList.remove('active');
	info_oil.classList.remove('active');
	info_all.classList.remove('active');
	let cards=document.querySelectorAll('.card');
	regex=/Beetroot|Cabbage|Carrot|Cauliflower|Courgett|Cucumber|Lettuce|Pepper|Radish|Tomato/
	for(let card of cards){
		if (regex.test(card.innerHTML)){
			card.style.display='flex';
			shop_main.style.height='2300px';
			block_products.style.height='1900px';
			list_products.style.height='1600px';
			btn_load.disabled=true;
			btn_load.style.backgroundColor='gray';
		}else{
			card.style.display='none';
		}
	}

}


let info_dairy_products=document.querySelector('.info_dairy_products');
info_dairy_products.addEventListener('click', showDairyProducts);
function showDairyProducts(){
	info_fruits.classList.remove('active');
	info_vegetables.classList.remove('active');
	info_dairy_products.classList.add('active');
	info_dried_fruits.classList.remove('active');
	info_oil.classList.remove('active');
	info_all.classList.remove('active');
	let cards=document.querySelectorAll('.card');
	regex=/Brie cheese|Butter|Cottage cheese|Cheddar cheese|Condensed milk|Cream|Ice cream|Feta cheese|Milk|Mozzarella cheese|Sour cream|Rokfor cheese|Yougurt/
	for(let card of cards){
		if (regex.test(card.innerHTML)){
			card.style.display='flex';
			shop_main.style.height='2700px';
			block_products.style.height='2400px';
			list_products.style.height='2000px';
			btn_load.disabled=true;
			btn_load.style.backgroundColor='gray';
		}else{
			card.style.display='none';
		}
	}

}



let info_dried_fruits=document.querySelector('.info_dried_fruits');
info_dried_fruits.addEventListener('click', showDriedFruits);
function showDriedFruits(){
	info_fruits.classList.remove('active');
	info_vegetables.classList.remove('active');
	info_dairy_products.classList.remove('active');
	info_dried_fruits.classList.add('active');
	info_oil.classList.remove('active');
	info_all.classList.remove('active');
	let cards=document.querySelectorAll('.card');
	regex=/Dried apricot|Dried bananas|Dried figs|Dried pineapple|Dried mango|Prune|Raisins/
	for(let card of cards){
		if (regex.test(card.innerHTML)){
			card.style.display='flex';
			shop_main.style.height='1900px';
			block_products.style.height='1500px';
			list_products.style.height="1200px";
			btn_load.disabled=true;
			btn_load.style.backgroundColor='gray';
		}else{
			card.style.display='none';
		}
	}

}

let info_oil=document.querySelector('.info_oil');
info_oil.addEventListener('click', showOil);
function showOil(){
	info_fruits.classList.remove('active');
	info_vegetables.classList.remove('active');
	info_dairy_products.classList.remove('active');
	info_dried_fruits.classList.remove('active');
	info_oil.classList.add('active');
	info_all.classList.remove('active');
	let cards=document.querySelectorAll('.card');
	regex=/Coconut oil|Mustard oil|Olive oil|Peanut oil|Pumpkin oil|Sesame oil|Sunflower oil/
	for(let card of cards){
		if (regex.test(card.innerHTML)){
			card.style.display='flex';
			shop_main.style.height='1900px';
			block_products.style.height='1500px';
			list_products.style.height='1200px';
			btn_load.disabled=true;
			btn_load.style.backgroundColor='gray';
		}else{
			card.style.display='none';
		}
	}

}

let info_all=document.querySelector('.info_all');
info_all.addEventListener('click', showAll);
function showAll(){
	info_fruits.classList.remove('active');
	info_vegetables.classList.remove('active');
	info_dairy_products.classList.remove('active');
	info_dried_fruits.classList.remove('active');
	info_oil.classList.remove('active');
	info_all.classList.add('active');
	let cards=document.querySelectorAll('.card');
	for(let card of cards){
			card.style.display='flex';
			shop_main.style.height='1500px';
			block_products.style.height='1200px';
			list_products.style.height="780px";
			btn_load.disabled=false;
			btn_load.style.backgroundColor='darkred';

	}
}