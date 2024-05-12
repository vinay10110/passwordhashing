const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
const router=require('./routes/authRout');
const app=express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Content-Length', 'X-Requested-With'],
    credentials:true
  }));
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    next();
  });
app.use('/api',router);
try {
    mongoose.connect('mongodb+srv://vinaychakravarthi10110:NY0xGcaWjJd8INnh@clusterhash.jblrlkd.mongodb.net/?retryWrites=true&w=majority&appName=Clusterhash');
} catch (error) {
    console.log('error connecting database');
    console.log(error);
}

app.listen(5000,()=>{
    console.log('server running on port 5000');
});
