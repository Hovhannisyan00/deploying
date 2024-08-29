const URL = "http://localhost:3333/products";
let arr;
fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    arr = data;
    console.log(data[0].data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });



fetch(URL)
  .then((res) => res.json())
  .then((data) => {
    const productsDiv = document.getElementById("products");

    data.forEach((item) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");

      productDiv.innerHTML = `
        <img src="${item.data.img}" alt="${item.data.name}">
        <h2>${item.data.name}</h2>
        <h3>${item.data.age} years old</h3>
        <p>$${item.data.price}</p>
        <button style = "background-color:rgb(212, 207, 207); border-color:rgb(212, 207, 207) ;">buy</button>
      `;

      productsDiv.appendChild(productDiv);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
