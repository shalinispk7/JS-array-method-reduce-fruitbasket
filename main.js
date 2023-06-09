// Solve Using Reduce Method:

 const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ];

// Output: { banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1 }

let basket= fruitBasket.reduce(function(totalcount,current){

totalcount[current] = (totalcount[current]||0) +1 ;
return totalcount

},{});
document.write("Counting of fruits in basket: ")
document.write(JSON.stringify(basket))







