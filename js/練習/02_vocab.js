function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function elementaryActive() {
    const words = [
        {
            "word": "opposite",
            "type": "adj.",
            "meaning": "located or situated on the other side or at a different end of a particular space.",
            "meaning_chinese": "另一邊的，相反的，對面的",
            "sentence": "My brother and I live on opposite sides of the city.",
            "sentence_chinese": "我哥哥和我住在城裡兩個方向相反的區。",
        },
        {
            "word": "opposite",
            "type": "adj.",
            "meaning": "located or situated on the other side or at a different end of a particular space.",
            "meaning_chinese": "另一邊的，相反的，對面的",
            "sentence": "My brother and I live on opposite sides of the city.",
            "sentence_chinese": "我哥哥和我住在城裡兩個方向相反的區。",
        }
    ];
    const item = document.getElementById("elementary");

    let content = '';

    for (i = 0; i < words.length; i++) {
        content +=`
        <div class="vocab2">
            <p class="word">${words[i].word}</p>
            <p class="meaning">
                <span class="type">${words[i].type}</span>
                &nbsp;
                ${words[i].meaning}
                <br>
                <span class="meaning_chinese">${words[i].meaning_chinese}</span>
            </p>
            <p class="sentence">
                ▪ ${words[i].sentence}
                <br>
                <span class="sentence_chinese">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                ${words[i].sentence_chinese}
                </span>
            </p>
        </div>`
    }

    item.innerHTML = content;
}

elementaryActive();