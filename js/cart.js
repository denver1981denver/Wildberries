const cart = () => {
	const cartBtn = document.querySelector('.button-cart'),
		cart = document.getElementById('modal-cart'),
		closeBtn = document.querySelector('.modal-close');

	cartBtn.addEventListener('click',	() => {
		cart.style.display = 'flex';
	});

	closeBtn.addEventListener('click', () => {
		cart.style.display = '';
	});
};

cart();