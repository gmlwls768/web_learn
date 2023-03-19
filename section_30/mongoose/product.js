const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(()=>{
        console.log("connection open")

    })
    .catch(e=>{
        console.log('err')
        console.log(e)
    })

const productSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength:20
    },
    price: {
        type:Number,
        required: true,
        min: [0, 'Price must be positive!'] // access msg

    },
    onSale:{
        type:Boolean,
        default:false
    },
    categories: [String],
    qty: {
        online:{
            type: Number,
            default: 0
        },
        inStore: {
            type:Number,
            default: 0
        }
    },
    size:{
        type: String,
        enum: ['S','M','L']
    }
})

productSchema.methods.greet = function(){
    console.log("hi")
    console.log(`-from ${this.name}`)
}

productSchema.methods.toggleOnSale = function(){
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function(newCat){
    this.categories.push(newCat);
    return this.save()
}

productSchema.statics.fireSale = function(){
    return this.updateMany({},{onSale:true,price:0})
}

const Product = mongoose.model('Product', productSchema)

const findProduct = async () =>{
    const foundProduct = await Product.findOne({name:'bike helmet'})
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}
// findProduct()
Product.fireSale().then(res => console.log(res))

// const bike = new Product({name:'MTB',price: 599, color:'red'})
// const bike = new Product({name:'bike helmet',price: 59, categories:['Cycling', 'Safety'], size:'M'})
    // color is nulled in db

// bike.save()
// Product.findOneAndUpdate({name:"bike helmet"}, {price:-10},{new:true , runValidators:true})
// .then(data =>{
//     console.log("IT WORKED")
//     console.log(data)
// })
// .catch(e =>{
//     console.log("err")
//     console.log(e )
// })