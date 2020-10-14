let http = require("http");

let user = [
    {id: 1, name: "chensir"},
    {id: 2, name: "MrchenSirLaile"}
]
let server = http.createServer(function(req, res){
    res.setHeader('Access-Control-Allow-Origin', "*");
    if(req.url === "/api/user"){
        res.end(JSON.stringify(user))
    }else{
        res.end("Not Found")
    }
})

server.listen(3000, function(){
    console.log("Server listening on 3000")
})