 const express = require('express');

 const app = express();

 var bodyParser = require('body-parser')
 app.use(bodyParser.urlencoded({ extended: false }))

 const mongoose = require('mongoose');
 const dotenv = require('dotenv').config();
 

 
 const path = require('path')

 




 

//  controller 




const dataController = require('./controllers/dataController');
const { error } = require('console');

 app.set('view engine' , 'ejs')

app.set('views' , 'views')

app.use(express.static('public'))



// 





console.log('hello world');
app.get('/' , (req , res) => { 
      res.render('home')
})


app.get("/about" , dataController.editPage )


mongoose.connect(process.env.DB_URL).then(() => {
       
       app.listen(9090);
       console.log('connected to mongo');
       

}).catch((error) => console.log(error)
)


