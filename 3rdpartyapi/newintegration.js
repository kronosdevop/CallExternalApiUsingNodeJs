const { response } = require('express');
const { get } = require('request');
const request = require('request-promise')
const errors = require('request-promise/errors')


async function nymcardApiCall(req,res) {
    let options = {
        method: 'GET',
        url: `https://api.stg.platform.my-1.nymcard.com/v1/users`,
        headers: {
            'apiKey': `tenant2-1a15almf-4054-4564-a59a-mn0957a0e094`,
            'Content-Type': 'application/json'
        },
        
    };

    let apiResponse = await new Promise(function (resolve,reject,res)

     {

        request(options).then(function (response) {


            resolve({ code: "00", data: response })
            
        }).catch(errors.StatusCodeError, function (error) {
            resolve({ code: "STCERR", data: error.response.body }) // status code error
        }).catch(errors.RequestError, function (error) {
            resolve({ code: "RETERR", data: error.response.body }) // request error 
        })

        
    })
    res.status(200).send(JSON.stringify(apiResponse)); 


}





module.exports = { nymcardApiCall }


