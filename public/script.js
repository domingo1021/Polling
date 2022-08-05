$(document).ready(async function(){
    let response;
    setInterval(async ()=>{
        let start = new Date().getSeconds();
        response = await axios.get("/polling");
        if(response.data.data === null){
            console.log( start, response.data.data)
            $("#messages").text("null")
        }
        else{
            console.log(start)
            $("#messages").text("");
            for(let i =0; i<response.data.data.length; i++){
                let messageElem = document.createElement('div');
                messageElem.textContent = response.data.data[i];
                document.getElementById('messages').prepend(messageElem);
            }
        }
    },2000)
    // for(let i=0; i < Number.POSITIVE_INFINITY; i++){
})

$("#submit-btn").click(async function(){
    console.log("clicked")
    let inputText = $("#input-text").val(); 
    try {
        await axios({
            method: "post",
                url: "/data",
                data: {"data":inputText},
        })
    } catch (error) {
        $("#messages").text("錯誤產生")
    }
})

$("#clear-btn").click(async function(){
    console.log("clear clicked")
    try {
        // await axios.delete("/data")
        await axios.delete("/Deletedata")
        $("#messages").text("")
    } catch (error) {
        $("#messages").text("錯誤產生")
    }
})