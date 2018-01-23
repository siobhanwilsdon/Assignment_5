$('#submit-btn').click(function(event) {
  event.preventDefault()
  var userInput = $('#city-type').val()
  if (userInput === 'nyc' || userInput === 'New York City' || userInput === 'New York' || userInput === 'NYC') {
    $('body').css('background', 'url(images/nyc.jpg)');
  } else if (userInput === 'la' || userInput === 'Los Angeles' || userInput === 'LA' || userInput === 'LAX') {
    $('body').css('background', 'url(images/la.jpg)');
  } else if (userInput === 'sf' || userInput === 'San Francisco' || userInput === 'SF' || userInput === 'Bay Area') {
    $('body').css('background', 'url(images/sf.jpg)');
  } else if (userInput === 'austin' || userInput === 'Austin' || userInput === 'ATX') {
    $('body').css('background', 'url(images/austin.jpg)');
  } else if (userInput === 'sydney' || userInput === 'Sydney' || userInput === 'SYD') {
    $('body').css('background', 'url(images/sydney.jpg)');
  } else {
  $('body').css('background', 'url(images/citipix_skyline.jpg)');
  }
})
