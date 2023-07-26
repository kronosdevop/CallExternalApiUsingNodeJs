const express =require("express")
const app = express()
const port =5000


//const integratenew = require('./newintegration')
const requestforapi = require('./requestapi')




//app.get("/test",integratenew.nymcardApiCall)
app.get("/test",requestforapi.callApi)

app.listen(port,()=>console.log(`app listening to the port ${port}`));

