const response = require('express')
const request = require('request')

async function callApi(req, res){
    let options = {
        method : 'GET' ,
        url :'https://api.stg.platform.my-1.nymcard.com/v1/users ',
        headers: {
            'apikey': 'tenant2-1a15almf-4054-4564-a59a-mn0957a0e094',
            'Content-Type': 'application/json'
        },
    }
	request(options, function (error, response , body) {
		if (error) throw new Error(error);
	res.status(200).send(body); 
	
		
	});

   }
   
module.exports={callApi}