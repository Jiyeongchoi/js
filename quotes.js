const quotes = [
{
    quote:"You can only be young once. But you can always be immature.",
    author:"Dave Barry"
},
{
    quote:"The goal of life is living in agreement with nature.",
    author:"Zeno"
},
{
    quote:"We are none of us infallible--not even the youngest of us.",
    author:"W. H. Thompson"
},
{
    quote:"Life is just one damned thing after another.",
    author:"Elbert Hubbard"
},
{
    quote:"Not a shred of evidence exists in favor of the idea that life is serious.",
    author:"Brendan Gill"
},
{
    quote:"There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is.",
    author:"Albert Einstein"
},
{
    quote:"What I look forward to is continued immaturity followed by death.",
    author:"Dave Barry"
},
{
    quote:"People, even more than things, have to be restored, renewed, revived, reclaimed, and redeemed; never throw out anyone.",
    author:"Audrey Hepburn"
},
{
    quote:"If we take care of the moments, the years will take care of themselves.",
    author:"Maria Edgeworth"
},
{
    quote:"We know what we are, but not what we may be.",
    author:"William Shakespeare"
},
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*10)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;