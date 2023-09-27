document.querySelector('#button-contact-API').addEventListener('click', () => {
    let req = new Request("http://127.0.0.1:8000/", {
            "method": "GET",
            "Access-Control-Allow-Origin" : "*",
            "mode": "no-cors",
            "headers": {
                "accept": "application/json"
            }
        });

    fetch(req)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        })
        .catch(console.error);
});