const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());

const MAXTIME = 8;
let fakeData = []
let time = 0;

app.get("/polling", (req, res) => {
    if(time < MAXTIME){
        time += 1
        return res.json({data: fakeData});
    }
    return res.json({data: null})
})

// app.get("/longPolling", (req, res)=>{
//     setTimeout(()=>{
//         // Do process
//         return res.json(fakeData);
//     }, 5000)
// })

app.post("/data", (req, res)=>{
    let {data} = req.body;
    console.log(data)
    fakeData.push(data)
    const inboundIP = req.header('x-forwarded-for') || req.socket.remoteAddress;
    return res.send(`${inboundIP} says ${data}`);
})
app.delete("/Deletedata", (req, res)=>{
    fakeData = []
    return res.send("Delete all");
})


app.listen(PORT, ()=>{

})