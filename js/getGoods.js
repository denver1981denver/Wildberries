const getGoods = () => {
   //  fetch('/db/db.json')
   //    .then ((res) => res.json())
   //    .then(function(data) {
   //      console.log(data);
   //    })
	const links = document.querySelectorAll('.navigation-link');
	
  const getData = () => {
    fetch('https://willberries-6355c-default-rtdb.europe-west1.firebasedatabase.app/db.json')
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem('data', JSON.stringify(data)); // При получении данных от сервера сохранять data в localStorage.
      });
  }

	links.forEach((link) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();
			getData();
		})
	})

	// localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4, 5]));
	// // console.log(goods);
	// const goods = JSON.parse(localStorage.getItem('goods'));
	// console.log(localStorage);
	// localStorage.removeItem('goods');
	// console.log(localStorage);
	
};

getGoods();