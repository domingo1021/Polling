$(document).ready(async function(){
    let response;
    setInterval(async ()=>{
        response = await axios.get("/polling");
        if(response.data.data === null){
            $("#messages").text("null")
            return 
        }
        $("#messages").text("");
        for(let i =0; i<response.data.data.length; i++){
            let messageElem = document.createElement('div');
            messageElem.textContent = response.data.data[i];
            document.getElementById('messages').prepend(messageElem);
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