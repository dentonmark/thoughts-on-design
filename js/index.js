$(document).ready(function() {
  
  // Get Initial Quote From API
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + new Date().getTime(), function(data) {

   // Place initial quote
   $("#quote").hide().html(data[0].content).fadeIn('slow');

   // Place initial source
   $("#source").hide().html("- " + data[0].title).fadeIn('slow');

  });

  // When you click the New Quote button
  $('#quoteButton').on('click', function() {
    // First it clears the quote
    $('#quote').fadeOut('slow');
    $('#source').fadeOut('slow');

   // Then it gets the new quote from the API
   $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=" + new Date().getTime(), function(data) {

   // Place the new quote
   $("#quote").hide().html(data[0].content).fadeIn('slow');

   // Place the new source
   $("#source").hide().html("- " + data[0].title).fadeIn('slow');
     
  });

 });

});

//Tweet It Button
function tweetIt () {
  var tweetQuote = document.getElementById('quote').innerText;
  var tweetSource = document.getElementById('source').innerText;
  var tweetUrl = 'https://twitter.com/intent/tweet?text=' +
    encodeURIComponent(tweetQuote) + encodeURIComponent(tweetSource);
    
  window.open(tweetUrl);
}