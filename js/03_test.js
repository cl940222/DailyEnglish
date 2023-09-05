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

function result1(event) {
    event.preventDefault();
    var score = 0;
    var x = document.getElementById('result1');
    var y = document.getElementById('reset1');

    for (var i = 1; i < 11; i++) {
        if (document.getElementById('eleCorrect' + i).checked) {
            score++;
        }
    }

    if (score >= 8) {
        x.innerHTML = `Yay!<br>You got all answers correct!`;
    } else if (score >= 6) {
        x.innerHTML = `Congrats!<br> You got ${score}/10 answers correct!`;
    } else if (score >= 1) {
        x.innerHTML = `You got ${score}/10 answers correct...`;
    } else {
        x.innerHTML = `Oops!<br> You got 0 answers correct...O_Q Let's try again...`;
    }
}

function result2(event) {
    event.preventDefault();
    var score = 0;
    var x = document.getElementById('result2');
    for (var i = 1; i < 11; i++) {
        if (document.getElementById('intCorrect' + i).checked) {
            score++;
        }
    }

    if (score >= 8) {
        x.innerHTML = `Yay!<br>You got all answers correct!`;
    } else if (score >= 6) {
        x.innerHTML = `Congrats!<br> You got ${score}/10 answers correct!`;
    } else if (score >= 1) {
        x.innerHTML = `You got ${score}/10 answers correct...`;
    } else {
        x.innerHTML = `Oops!<br> You got 0 answers correct...O_Q Let's try again...`;
    }
}

function result3(event) {
    event.preventDefault();
    var score = 0;
    var x = document.getElementById('result3');
    for (var i = 1; i < 11; i++) {
        if (document.getElementById('advCorrect' + i).checked) {
            score++;
        }
    }

    if (score >= 8) {
        x.innerHTML = `Yay!<br>You got all answers correct!`;
    } else if (score >= 6) {
        x.innerHTML = `Congrats!<br> You got ${score}/10 answers correct!`;
    } else if (score >= 1) {
        x.innerHTML = `You got ${score}/10 answers correct...`;
    } else {
        x.innerHTML = `Oops!<br> You got 0 answers correct...O_Q Let's try again...`;
    }
}

function resetEleForm(event) {
    event.preventDefault();
    document.getElementById("eleForm").reset();
    document.getElementById('result1').innerHTML = '';
    window.scrollTo(0,0);
}

function resetIntForm(event) {
    event.preventDefault();
    document.getElementById("intForm").reset();
    document.getElementById('result2').innerHTML = '';
    window.scrollTo(0,0);
}

function resetAdvForm(event) {
    event.preventDefault();
    document.getElementById("advForm").reset();
    document.getElementById('result3').innerHTML = '';
    window.scrollTo(0,0);
}

