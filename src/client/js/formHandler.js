function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    const serverPort = process.env.NODE_ENV === 'production' ? 8081 : 8080;
    console.log("serverPort: ", serverPort);
    console.log("::: Form Submitted :::")
    fetch(`http://localhost:${serverPort}/test`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({input: formText})
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    }).catch(error => console.error('Error: ', error));
}

export {handleSubmit}
