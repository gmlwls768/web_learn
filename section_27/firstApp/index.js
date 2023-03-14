const express = require("express");
const app = express()

// app.use((req,res)=>{
//     console.log("We got a new request")
//     res.send("<h1>This is webpage! </h1>")
// })
app.get('/',(res,send)=>{
    res.send('this is root page')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId',(req,res)=>{
    const {subreddit,postId} = req.params;
    res.send(`<h1>Viewing postid: ${postId}on ${subreddit} subreddit</h1>`)
})

app.post('/cats',(req,res)=>{
    res.send("meow???")
})

app.get('/cats', (req,res)=>{
    res.send("meow")
})

app.get('/dogs', (req,res)=>{
    res.send("woof")
})

app.get('/search',(req,res)=>{
    const {q} = req.query
    if(!q){
        res.send('nothing found if nothing searched!!!!')
    }
    res.send(`<h1>Search result for: ${q} </h1>`)
})

app.get('*',(req,res)=>{
    res.send("idk this path")
})


app.listen(8080, ()=>{
    console.log("listening on port 8080")
})
