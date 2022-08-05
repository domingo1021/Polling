const express = require('express');
const app = express();
const PORT = 3002;

app.use(express.static("public"));
app.use(express.json());

const MAXTIME = 8;
let fakeData = []

app.get("/polling", (req, res) => {
    return res.json({data: fakeData})
})

app.post("/data", (req, res)=>{
    let {data} = req.body;
    if(fakeData === null){
        fakeData = []
    }
    console.log(data)
    fakeData.push(data)
    const inboundIP = req.header('x-forwarded-for') || req.socket.remoteAddress;
    return res.send(`${inboundIP} says ${data}`);
})
app.delete("/Deletedata", (req, res)=>{
    fakeData = null
    return res.send("Delete all");
})


app.listen(PORT, ()=>{

})