const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/relationshipDemo')
.then(()=>{
    console.log('MONGO CONNECTION OPEN')
})
.catch(e=>{
    console.log('ERR')
    console.log(e)
})

const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    addresses: [
        {   
            street: String,
            city:String,
            state:String,
            country:String,
            _id:false
        }
    ]
})

const User = mongoose.model('User', userSchema)

const makeUser = async()=>{
    const u = new User({
        first:'Harry',
        last:'Potter'
    })
    u.addresses.push({
        street:'123 Sesame St',
        city:'New York',
        state: 'NY',
        country:'USA'
    })
    const res = await u.save()
    console.log(res)
}

const addAdress = async(id)=>{
    const user = User.findById(id)
    user.addresses.push(
        {
            street:'990 3rd St',
            city:'New York',
            state: 'NY',
            country:'USA'
        }
    )
    const res = await user.save()
    console.log(res)
}

makeUser()