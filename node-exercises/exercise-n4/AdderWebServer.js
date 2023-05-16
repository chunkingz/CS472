const http = require('http');
const url = require('url');
const fs = require('fs');
const addmod = require('./addmod.js');
const PORT = 8080;

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    console.log(q);
    var filename = "." + q.pathname;
    console.log(filename);
    if (q.pathname=="/add.js") {
        addmod.add(req,res,q.query)
    } else {
        fs.readFile(filename, function(err, data) {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end("404 Not Found");
            } else {
                res.writeHead(200);
                res.write(data);
                return res.end();
            }
        });
    }
}).listen(PORT, ()=>{
        console.log(`Server running on port: ${PORT}`);
});
