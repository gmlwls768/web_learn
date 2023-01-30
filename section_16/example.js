// Your code goes in here:
let product = {
    name : "Gummy Bears",
    inStock : true,
    price : 1.99,
    flavors : ["grape", "apple", "cherry"]
}

//PLEASE DON'T TOUCH THIS LINE!
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
}

//YOUR CODE GOES DOWN HERE:
let fullAddress = restaurant['name'] + restaurant['address'] + restaurant['city'] + restaurant['state'] + restaurant["zipcode"];