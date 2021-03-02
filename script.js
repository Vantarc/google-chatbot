function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function writeMessage(message, id, interval) {
    j = 0
    var interval = setInterval(function(){
        document.getElementById(id).innerHTML += message.charAt(j);
        j++;
        if (j > message.length){
            clearInterval(interval);
        }
    }, interval);
}

function writePoints(message, id, interval) {
    x = 0
    var interval = setInterval(function(){
        document.getElementById(id).innerHTML += message.charAt(x);
        x++;
        if (x > message.length){
            clearInterval(interval);
        }
    }, interval);
}
async function onSearch() {
    messages = [
            "Please wait while I answer your question.",
            "Searching....",
            "Please wait a second..", 
            "Wait longer!", 
            "I said wait longer!!",
            "still searching....",
            "How much longer do I need? Not sure about that.",
            "This really gets annoying....why are you still here?",
            "I am searching.",
            "Give me a moment.",
            "If you want, you can get yourself a tea.",
            "For all the search results I will find, you need Eddies backpack.",
            "Hold the lion.",
            "This can take some time.",
            "Don't be so impatient.",
            "Your conversation with me is slowing down the search.",
            "You distract me.",
            "My search results are better than googles."
    ]
    search = document.getElementById("question-in").value.replaceAll(" ", "+")
    points = document.getElementById("points")
    answer = document.getElementById("answer")
    
    points.style.display = "block"
    answer.style.display = "block"
    for(i = 0; i < messages.length; i++){
        answer.innerHTML = ""
        points.innerHTML = "."
        writeMessage(messages[i],"answer",50)
        writePoints("....","points",1000)
        await sleep(5000);
        console.log(i)
    
    }

    answer.innerHTML = "I finished....here are the results:";
    await sleep(2000);

    window.location.href ="http://www.google.com/search?q=" + search;

};
