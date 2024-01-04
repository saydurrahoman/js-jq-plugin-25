// addClass
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();


$(document).ready(function(){
  let c = $('.calendar');
  let calendar = new Calendar(c);
  // console.log(calendar.getSelectedDate().day);
  // console.log(c.find(0));
  c.find('.ok-btn').on('click', function() {console.log(calendar.getSelectedDate().fullDate)});
})