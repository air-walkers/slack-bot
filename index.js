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


app.post('/', (req, res) => {
    
    const text = req.body.text;
    const data = {
        response_type: 'in_channel',
        text: '',
        mrkdwn: true,
        attachments: [
            {image_url: 'http://cdn.newsapi.com.au/image/v1/b04f0e997ff7450f0ecd6ecc1b7f29a4?width=650'}
        ],
    };
    
    let index = text.match(/[0-9]+/);
    
    if (index !== null) {
        
        index = Number(index[0]);
        
    }
    

    // If there was a number and it's within the range of the random array,
    // return that specific quote
    if (index > 0 && index < gfda.random.length) {
        
        data.text = gfda.random[index-1];
        
    } else if (text === 'help') {
        
        data.text = gfda.help;
    
    } else {
        
        // None of our other conditions have been met, just return a random quote
        const randomNumber = Math.floor(Math.random() * gfda.random.length);
        data.text = gfda.random[randomNumber];
    
    }
    
    // If text is 'sfw' then we want to return a value that is 'safe for work'
    // Replace all profanities with ****
    // This is replaced at the end, so swf should still work with specifying a number
    if (text.includes('sfw')) {
        data.text = data.text.replace('fuck', '****');
    }
    
    // Send the response back to slack
    res.json(data);
    
});

