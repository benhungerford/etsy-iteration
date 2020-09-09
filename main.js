//Question 1
// Show me how to calculate the average price of all items. Please `console.log` the average.
// The average price is $23.63

let prices = [];
items.forEach(function(list) {
  prices.push(list.price);
});
const averagePrices = prices.reduce((a,b) => a + b, 0) / prices.length;
console.log(averagePrices);

// 2. Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please `console.log` the answer.

const cheapItems = items.filter(function(item) {
  return item.price <= 18 && item.price >= 14 && item.currency_code == "USD"
});

console.log(cheapItems);

// 3. Show me to how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find.

const britishCurrency = items.filter(function(item) {
  // return item.currency_code == "GBP"
  return item.currency_code.includes("GBP");
});

britishCurrency.forEach(function(item){ console.log(`${item.title} costs £${item.price}`)});

// 4. Show me how to find which items are made of wood. Please `console.log` the ones you find.

const madeOfWood = items.filter(function(item) {
  return item.materials.includes("wood")
});

console.log(madeOfWood);

// 5. Show me how to find which items are made of eight or more materials. Please `console.log` the ones you find.

const moreThanEight = items.filter(function(item) {
  return item.materials.length > 8;
});

console.log(moreThanEight);
