const express = require('express')
const app = express()
const morgan = require('morgan')


app.use(morgan('dev'))

app.use((req,res,next)=>{
    req.requestTime = Date.now()
    console.log(req.method, req.path)
    next()
})

app.use('/dogs', (req,res,next)=>{
    console.log('i love dogs')
    next()
})

const verifyPassword = (req,res,next)=>{ //app.use = all , function = select and run
    const {password} = req.query
    if(password === "chicken"){
        next()
    }
    res.send('sry need a p/w')
}



// app.use((req,res,next)=>{
//     console.log('first middleware!')
//     return next() // use return --> cant run next line
//     console.log('first middleware after next()')
// })

// app.use((req,res,next)=>{
//     console.log('second middleware!')
//     next()
// })

app.get('/', (req,res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('home!')
})

app.get('/dogs', (req,res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('댕댕!')
})

app.get('/secret',verifyPassword, (req,res)=>{ //secure path using function
    res.send('my age is 24 D:')
})

app.use((req,res)=>{
    res.status(404).send('NOT FOUND!')
})

app.listen(3000,()=>{
    console.log('connected 3000')
})