$(document).ready(function() {
  var scrollLink = $(".scroll");

  $(window).on("beforeunload", function() {
    $(window).scrollTop(0);
  });

  // smooth scrolling
  scrollLink.click(function(e) {
    e.preventDefault();
    $("body,html").animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });
});

$(window).on("scroll", function() {
  if ($(window).scrollTop() > 50) {
    $(".nav-block").addClass("active");
  } else {
    //remove the background property so it comes transparent again (defined in your css)
    $(".nav-block").removeClass("active");
  }
});
