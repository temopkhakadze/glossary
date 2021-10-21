var dictionary = [];
search = function () {
    query = document.getElementById('search').value;
    if (query == "") {
        for (var i = 0; i < dictionary.length; i++) {
            let word = document.getElementById("words_"+i);
            word.style.display= "block"
            document.getElementById("luka").style.height = "100%";

        }
        return;
    }
    query = query.toLowerCase();

    found = -1; //initialize found to false
    let = alreadyDraw = false;
    for (var i = 0; i < dictionary.length; i++) {
        let word = document.getElementById("words_"+i);
        let w = dictionary[i].word.toLowerCase()
        if (w.indexOf(query)==-1) {
            found = i;
            word.style.display= "none"
        } else {
            if(!alreadyDraw){
                show(i)
                alreadyDraw = true;
            }
            word.style.display= "block"
            // document.getElementById('word_text').innerHTML = "Word not found";
            // document.getElementById('definition').innerHTML = "The word you entered is not found in our dictionary";
            // document.getElementById('related').innerHTML = "No related words";
            // //me davamate
            // document.getElementById('example').innerHTML = "No related words";

        }
    }
    document.getElementById("luka").style.height = "100vh";
    // if (found >= 0) {
    //     show(found);
    // }
}
let drawWords = function (dictionary) {
    init = function () {
        for (var i = 0; i < dictionary.length; i++) {
            let j = i + 1;
            
            document.getElementById('word_list').innerHTML += "<li id='words_"+i+"' onclick ='show(" + i + ")'>" + j + ":" + dictionary[i].word + "</li>";
        }

    }
    //call the init function when page loads
    init();
    
    //display a word, its definition and related wods
    show = function (i) {
        // document.getElementById('related').innerHTML = dictionary[i].rel;
        document.getElementById('word_text').innerHTML = dictionary[i].word;
        document.getElementById('definition').innerHTML = dictionary[i].def;
        document.getElementById('example').innerHTML = dictionary[i].ex;
        document.getElementById('img').innerHTML = dictionary[i].img;
        document.getElementById('related').innerHTML = dictionary[i].rel;
    }
    
    //show first word in the dictionary when page loads
    show(0)
    // search functionality

}

var xhr = new XMLHttpRequest();
xhr.open('GET', 'data_provider/words.json');
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        // document.getElementById('result').innerHTML = xhr.responseText;
        dictionary = JSON.parse(xhr.responseText)
        drawWords(dictionary)
        
    }
};

xhr.send();

//fill the dictionary with words

    //To sort words on display alphabetical

    // dictionary.sort(function(a, b) {
    // var textA = a.word.toUpperCase();
    // var textB = b.word.toUpperCase();
    // return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    // });