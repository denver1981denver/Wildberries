const search = () => {
  const input = document.querySelector(".search-block > input"),
    searchBtn = document.querySelector(".search-block > button");

  // input.addEventListener('input', (event) => {
  // 	console.log(event.target.value);
  // })

  searchBtn.addEventListener('click', () => {
    console.log(input.value);
  });
  // написать обработчик события click на кнопке и по этому события выводить input.value в консоль
};

search();
