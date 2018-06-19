var express = require('express')
var app = express()
var request = require('request');


app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/meteo.html');
    
});

// récupération donnée de l'API
app.get('/meteoreunion', function (req, res) {
    let apiKey = '9031a16cca38c0d72febca223b7ed774';
    let city = 'reunion';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    
    
    request(url, function (err, response, body) {
    
        if(err){
          console.log('error:', error);
        } else {
  
          console.log('body:', body);
       
          res.json(response)
        }
      });
    
    
    
});

app.get('/meteoparis', function (req, res) {
  let apiKey = '00b9eb2e243bd4cfcb0b80a1af26b339';
  let city = 'paris';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
  
  
  request(url, function (err, response, body) {
  
      if(err){
        console.log('error:', error);
      } else {

        console.log('body:', body);
     
        res.json(response)
      }
    });
  
    app.get('/meteomoscow', function (req, res) {
      let apiKey = '60a10e7e71ed6eca9cc9979d0ca8bdd8';
      let city = 'moscow';
      let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      
      
      request(url, function (err, response, body) {
      
          if(err){
            console.log('error:', error);
          } else {
    
            console.log('body:', body);
         
            res.json(response)
          }
        });

        app.get('/meteomarseille', function (req, res) {
          let apiKey = '1413c88504f339fc6c5f6f57ff50c75d';
          let city = 'marseille';
          let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
          
          
          request(url, function (err, response, body) {
          
              if(err){
                console.log('error:', error);
              } else {
        
                console.log('body:', body);
             
                res.json(response)
              }
            });
      
      
  
});

app.get('/meteomarseille', function (req, res) {

  
  
  request(, function (err, response, body) {
  
      if(err){
        console.log('error:', error);
      } else {

        console.log('body:', body);
     
        res.json(response)
      }
    });


})
})


  










app.listen(3091, function () {
    console.log(__dirname)
    console.log('Example app listening on port 3011!')
  })
