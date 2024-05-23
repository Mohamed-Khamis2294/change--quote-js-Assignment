function changeQuote(){
  const arr=[
    {
    author:'― Oscar Wilde',
    quote:'“Be yourself; everyone else is already taken.”',
    },
    {
    author:'― Frank Zappa',
    quote:'“So many books, so little time.”',
    },
    {
    author:'― Marcus Tullius Cicero',
    quote:'“A room without books is like a body without a soul.”',
    },
    {
    author:'― Mae West',
    quote:'“You only live once, but if you do it right, once is enough.”',
    },
    {
    author:'― Mahatma Gandhi',
    quote:'“Be the change that you wish to see in the world.”',
    },
    {
    author:'― Ralph Waldo Emerson',
    quote:'“Always forgive your enemies; nothing annoys them so much.”',
    },
  ]
  var random=Math.trunc(Math.random()*arr.length)+1;
  console.log(random);
  document.getElementById('random-author').textContent=arr[random-1].author;
  document.getElementById('random-quote').textContent=arr[random-1].quote;
}