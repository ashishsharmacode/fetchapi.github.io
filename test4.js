function reslt(){
    url="https://meme-api.herokuapp.com/gimme"
fetch(url)
.then(function (response){
    return response.json();
})
.then(function(data){
    display_image(data["preview"][0]);
})
.catch(function(error){
console.log("Error:" + error);
});
}
function display_image(image_url){
    document.getElementById('image').src=image_url
}