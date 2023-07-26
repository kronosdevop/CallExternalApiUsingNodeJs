const express =require("express")
const app = express()
const port =3000

const apiCallFromRequest = require('./Request')
const apiCallFromNode = require('./NodeJsCall')
const requests = require('./3rdpartyapi/requestapi')

app.get("/test",apiCallFromNode.callApi)
app.get("/request",requests.callApi)


app.listen(port,()=>console.log(`app listening to the port ${port}`));

// const http = require('http')

// http.createServer((req, res) => {
//         if(req.url === "/request"){
//             apiCallFromRequest.callApi(function(response){
//                 //console.log(JSON.stringify(response));
//                 res.write(JSON.stringify(response));
//                 res.end();
//             });
//         }
//         else if(req.url === "/node"){
//             apiCallFromNode.callApi(function(response){
//                 res.write(response);
//                 res.end();
//             });
//         }
        
//         // res.end();
// }).listen(3000);

// console.log("service running on 3000 port....");