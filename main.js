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

// 3. Show me how find the item with a "GBP" currency code and print its name and price. Please `console.log` the one you find.
