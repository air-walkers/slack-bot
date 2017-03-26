'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const gfda = require('./gfda.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const server = app.listen(8080, () => {
    console.log('Express server listening on port %d in $s mode', server.address().port, app.settings.env);
});


  let data = {
        
        response_type: 'in_channel',
        
        text: '',
        
        attachments: [
                
            {image_url: 'http://cdn.newsapi.com.au/image/v1/b04f0e997ff7450f0ecd6ecc1b7f29a4?width=650'}
            
        ]
        
    };


app.post('/', (req, res) => {
    
    let text = req.body.text;
    
    //text = text.replace(/[^\/\d]/g, '');
    
    let index = text.match(/[0-9]+/);
    
    if(index !== null){
        
        index = Number(index[0]);
        
    }
    
    console.log(text,index);
    
    //res.json(data);
    
    //Number.isInteger(Number(text)) && Number(text) < random.length
    
   if(index > 0 && index < gfda.random.length){
   
        console.log(index);    
        
        data.text = gfda.random[index-1];
        
        res.json(data);
        
    } else if (text === 'sfw'){
        
        
        
    } else {
        
        
        
    }
    
});

