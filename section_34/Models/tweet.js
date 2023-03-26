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

const userSchema = new Schema({
    username:String,
    age:Number,

})

const tweetSchema = new Schema({
    text:String,
    likes: Number,
    user: {type:Schema.Types.ObjectId, ref: 'User'}
})

const User = mongoose.model('User', userSchema)
const Tweet = mongoose.model('Tweet', tweetSchema)

// const makeTweets = async()=>{
//     // const user = new User({
//     //     username:'chickenfan99',
//     //     age: 61
//     // })
//     const user = await User.findOne({username:'chickenfan99'})
//     // const tweet1 = new Tweet({text:'i love chickens', likes: 0 })
//     // tweet1.user = user
//     const tweet2 = new Tweet({text:'chickens make noises', likes: 1234 })
//     tweet2.user = user
//     user.save()
//     // tweet1.save()
//     tweet2.save()
// }

// makeTweets()

const findTweet = async() =>{
    const t = await Tweet.find({}).populate('user','username')
    console.log(t)
}
findTweet()