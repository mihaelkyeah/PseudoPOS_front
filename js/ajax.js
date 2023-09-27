document.querySelector('#button-contact-API').addEventListener('click', () => {
    // let req = new Request();

    fetch("http://127.0.0.1:8000/", {
        "method": "GET",
        // "Access-Control-Allow-Origin" : "*",
        // "mode": "no-cors",
        "accept": "application/json"
    })
        .then((response) => response.json())
        .then((data) => {
            alert("Success: "+data.success+"\n"+data.message);
        })
        .catch(console.error);
});