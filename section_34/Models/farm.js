const mongoose = require('mongoose')
const {Schema} = mongoose
mongoose.connect('mongodb://localhost:27017/relationshipDemo')
.then(()=>{
    console.log('MONGO CONNECTION OPEN')
})
.catch(e=>{
    console.log('ERR')
    console.log(e)
})

const productSchema = new Schema({
    name:String,
    price: Number,
    season:{
        type: String,
        enum: [ 'Spring','Summer','Fall', 'Winter']
    }
})

const farmSchema = new Schema({
    name:String,
    city:String,
    products:[{type: Schema.Types.ObjectId, ref:'Product'}]
})

const Product = mongoose.model('Product', productSchema)
const Farm = mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     {name: 'Goddess Melon', price:4.99, season:'Summer'},
//     {name: 'no sugar watermelon', price:4.99, season:'Summer'},
//     {name: 'Asparagus', price:3.99, season:'Spring'}
// ])

// const makeFarm = async()=>{
//     const farm = new Farm({name: 'full belly farms', city:'guinda, CA'})
//     const melon = await Product.findOne({name:'Goddess Melon'})
//     farm.products.push(melon)
//     await farm.save()
// }
// makeFarm()

// const addProduct = async()=>{
//     const farm = await Farm.findOne({name:'full belly farms'})
//     const watermelon = await Product.findOne({name:'no sugar watermelon'})
//     farm.products.push(watermelon)
//     await farm.save()
// }
// addProduct()

Farm.findOne({name:'full belly farms'})
    .populate('products')
    .then(farm => console.log(farm))
