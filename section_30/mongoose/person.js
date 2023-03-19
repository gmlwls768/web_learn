const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(()=>{
        console.log("connection open")

    })
    .catch(e=>{
        console.log('err')
        console.log(e)
    })

const personSchema = new mongoose.Schema({
    first: String,
    last:String
})

personSchema.virtual('fullName').get(function (){
    return `${this.first} ${this.last}`
})//.set  //setter 

personSchema.pre('save',async function(){
    console.log("about save")
})
personSchema.post('save',async function(){
    console.log("just save")
})

const Person = mongoose.model('Person',personSchema)
