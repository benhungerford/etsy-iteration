//Question 1
// Show me how to calculate the average price of all items. Please `console.log` the average.
// The average price is $23.63

let prices = [];
items.forEach(function(list) {
  prices.push(list.price);
});
const averagePrices = prices.reduce((a,b) => a + b, 0) / prices.length;
console.log(averagePrices);
