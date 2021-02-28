const baseUrl = "https://tinytesturl.herokuapp.com/api/url";

const urlInput = document.getElementById("url-input");
const urlOriginal = document.getElementById("url-original");
const urlShort = document.getElementById("url-short");



urlInput.addEventListener("keyup", (event)=>{
    if(event.keyCode === 13){
        event.preventDefault();
        submitUrl();
    }
})

const submitUrl = ()=>{
    const payload = {
        url: urlInput.value
    };

    fetch(baseUrl, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(payload),
    }).then(res=>{
        return res.json();
    }).then(data=>{
        console.log(">>> ", data.tinyUrl)
        urlOriginal.href = data.bigUrl;
        urlShort.href= baseUrl+"/"+data.tinyUrl;
        urlShort.innerHTML = data.tinyUrl;
    })

    urlInput.value="";
    payload.url="";
}