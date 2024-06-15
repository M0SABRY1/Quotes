var qoute1 = {
    word: "“Be yourself; everyone else is already taken.”",
    auther: "Oscar Wilde"
}
var qoute2 = {
    word: "“So many books, so little time.”",
    auther: "Frank Zappa"
}
var qoute3 = {
    word: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    auther: "Albert Einstein"
}
var qoute4 = {
    word: "“Be the change that you wish to see in the world.”",
    auther: "Mahatma Gandhi"
}
var qoute5 = {
    word: "“In three words I can sum up everything I've learned about life: it goes on.”",
    auther: "Robert Frost"
}
var qoute6 = {
    word: "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    auther: "Bernard M. Baruch"
}
var qoute7 = {
    word: "“Do not take life too seriously. You will not get out alive.”",
    auther: "Elbert Hubbard"
}
var qoute8 = {
    word: "“It's not what happens to you, but how you react to it that matters.”",
    auther: "Epictetus"
}
var qoute9 = {
    word: "“You only live once, but if you do it right, once is enough.”",
    auther: "Mae West"
}
var qoute10 = {
    word: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    auther: "Ralph Waldo Emerson"
}

var quotes = [
    qoute1, qoute2, qoute3, qoute4, qoute5, qoute6, qoute7, qoute8, qoute9, qoute10
];




function addQuote() {
    var num = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerHTML = quotes[num].word;
    document.getElementById("Auther").innerHTML = quotes[num].auther;
}