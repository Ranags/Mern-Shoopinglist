const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')
const path = require('path')
const app = express();
//BodyParser Middleware
app.use( bodyParser.json())
//DB CONFIG
const db = require('./config/keys').mongoURI;

//connect to mongo
mongoose.connect(db).then(()=> console.log('mongodb connected . . ')).catch(err => console.log(err));
// {useUnifiedTopology: 
//     true },
//use routes
app.use('/api/items',items)


if(process.env.NODE__ENV === 'production'){

app.use(express.static('client/build'));

app.get('*',(req,res)=>{

res.sendFile(path.resolve(__dirname,'client','build','index.html'));

})

}
app.use('')

const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`server started ${port}`));