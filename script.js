
const urlInput = document.getElementById('urlinput');

function shortenUrl() {
    // var longUrl = document.getElementById("longUrl").value;
    // var customName = document.getElementById("customName").value;
    // if(isValidUrl(urlInput.value)==false){
    //     alert("Invalid Url");
    //     return;
    // }
    // Construct the API URL
    var apiUrl = "https://ulvis.net/api.php?url=" + urlInput.value;

    // Add private parameter to make the URL private
    apiUrl += "&private=1";
    console.log(apiUrl)
    // Make a GET request to the API
    fetch(apiUrl)
        .then(response => {
            console.log("hiii")
            console.log(response)
            console.log("hiii")
            response.json()
        })
        .then(data => {
            console.log("hello")
            console.log(data)
            console.log("hello")
            // Handle the response from the API
            if (data.success) {
                // Shortened URL is available in data.shortenedUrl
                alert("Shortened URL: " + data.shortenedUrl);
            } else {
                // Handle error response
                alert("Failed to shorten URL. Error: " + data.error);
            }
        })
        .catch(error => {
            // Handle any errors that occur during the fetch
            alert("An error occurred: " + error);
        });
}
function isValidUrl(url) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

    // Return true if the URL matches the pattern, false otherwise
    return pattern.test(url);
}