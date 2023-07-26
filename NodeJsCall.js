const request = require('request')

async function callApi(req, res){
    let options = {
        method : 'GET' ,
        url :'https://api.stg.platform.my-1.nymcard.com/v1/ ',
        header: {
            'NYMCARDS_API_TOKEN': 'tenant2-1a15almf-4054-4564-a59a-mn0957a0e094'
        },
    }
	request(options, function (error, response, body) {
		if (error) throw new Error(error);
	// console.log
	res.status(200).send(body); 
	
		
	});
// let res = await request(options)
// console.log(res)
//  return res;
    }
module.exports={callApi}
 
// // module.exports={callApi}
// const http = require("https");

// const options = {
// 	"method": "GET",
//     "url" : "https://api.stg.platform.my-1.nymcard.com/v1/ ",
// 	"headers": {
// 		"NYMCARDS_API_TOKEN": "tenant2-1a15almf-4054-4564-a59a-mn0957a0e094"
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on("data", function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on("end", function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();