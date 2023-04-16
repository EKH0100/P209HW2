const form = document.getElementById("pizza-form");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const size = document.querySelector('input[name="size"]:checked').value;
  const toppings = document.getElementById("toppings").value;

  const price = parseFloat(size) + parseFloat(toppings);

  document.getElementById("price").innerHTML = `Your total price is: $${price.toFixed(2)}`;
});
