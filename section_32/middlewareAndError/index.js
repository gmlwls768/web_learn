const express = require('express')
const app = express()
const morgan = require('morgan')

const AppError = require('./AppError')

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
    // res.send('sry need a p/w')
    // res.status(401)
    throw new AppError('Password required',401)

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

app.get('/error', (req,res)=>{
    chicken.fly()
})

app.get('/dogs', (req,res)=>{
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('댕댕!')
})

app.get('/secret',verifyPassword, (req,res)=>{ //secure path using function
    res.send('my age is 24 D:')
})

app.get('/admin',(req,res)=>{
    throw new AppError('not Admin!!',403)
} )

app.use((req,res)=>{
    res.status(404).send('NOT FOUND!')
})

// app.use((err,req,res,next)=>{
//     console.log("*******************************************")
//     console.log("*******************ERROR********************")
//     console.log("*******************************************")
//     next(err)
// })

app.use((err,req,res,next)=>{
    const { status = 500 , message = 'something error' } = err
    res.status(status).send(message)
})

app.listen(3000,()=>{
    console.log('connected 3000')
})