$(document).ready(function() {
  $(".left_sidebar > ul > li > a").click(function() {
    $(this).find("~ ul").stop().slideToggle("slov");
  });
});