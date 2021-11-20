const getGoods = () => {
   //  fetch('/db/db.json')
   //    .then ((res) => res.json())
   //    .then(function(data) {
   //      console.log(data);
   //    })
	const links = document.querySelectorAll('.navigation-link');
	
	links.forEach(function (item) {
		console.log(item);
	})

  const getData = () => {
    fetch('https://willberries-6355c-default-rtdb.europe-west1.firebasedatabase.app/db.json')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

};

getGoods();