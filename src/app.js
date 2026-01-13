import express from 'express';
import { rootDirectory } from './utils.js';

const app = express();

app.use(express.static(`${rootDirectory}/public`));

app.get("/", (req, res)=> { 
    res.sendFile(`${rootDirectory}/views/index.html`);
});

app.get("/ip", (req, res) => {
    res.sendFile(`${rootDirectory}/views/ip.html`);
});

app.get("/hack", (req, res) => {
    res.sendFile(`${rootDirectory}/views/hack.html`);
});

app.get("/final", (req, res) => {
    res.sendFile(`${rootDirectory}/views/final.html`);
});

app.use(express.urlencoded({extended: false}));

app.post("/login", (req, res) => {
    const {user, pass} = req.body;
    if(user == "Ciberseguridad" && pass == "536"){
        res.redirect("/ip");
    }
    else{
        res.send("error");
    }
});

app.post("/ip", (req, res) => {
    if(req.body.ip == "34.229.9.63"){
        res.redirect("/hack");
    }else{
        res.send("error");
    }
});

app.post("/hack", (req, res) => {

    const {user, pass} = req.body;
    console.log(req.body)
    if(user == "awsftpuser" && pass == "0019808"){
        res.redirect("/final");
    }else{
        res.send("error");
    }
});


app.listen(3000, ()=> console.log("server up"));