$(document).ready(function(){
    let submitBtn = $('#btn')
    let searchInput = $('#searchInput')
    let resultsDiv = $('#results');
    submitBtn.click(function(){
        resultsDiv.empty()
        let str = searchInput.val()
        newReq(str)
    });
});

function newReq(str){
    let api_url = 'https://api.tenor.com/v1/search?q='+str+'&key=LIVDSRZULELA&limit=8'
    let http = new XMLHttpRequest();
    http.open('GET', api_url);
    http.responseType = 'json'
    http.send();
    http.onreadystatechange = function() {
        if (http.readyState === 4 && http.status === 200) {
            let results = http.response.results;
            let resultsDiv = $('#results');
            results.forEach(function(result) {
                let imageUrl = result.media[0].gif.url
                let image = $(document.createElement('img'))
                image.attr('src', imageUrl)
                image.appendTo(resultsDiv)
            });
        }
    };
}