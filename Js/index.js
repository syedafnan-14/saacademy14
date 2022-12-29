const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('../html/index.html');
const about= fs.readFileSync('../html/about.html');
const blog = fs.readFileSync('../html/blog.html');
const contact = fs.readFileSync('../html/contact.html');
const course = fs.readFileSync('../html/course.html');

const server = http.createServer((req,res)=>{
    url = res.url;
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');

    if(url == 'index.html'){
        res.end(home);
    }
    else if(url == 'about.html'){
        res.end(about);
    }
    else if(url == 'blog.html'){
        res.end(blog);
    }
    else if(url == 'contact.html'){
        res.end(contact);
    }
    else if(url == 'course.html'){
        res.end(course);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>Error 404 </h1>");
    }
})

server.listen(port,hostname,()=>{
    console.log('Server running at http://${hostname}:${post}');
});