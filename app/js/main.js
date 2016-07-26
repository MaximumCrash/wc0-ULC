$(".link").on("click", function () {
  console.log(this.attr('data-go'));
});


$(".links > li").on("click", function () {
console.log(this.attr('data-go'));
});


$(".button").on("click", function () {
console.log(this.attr('data-go'));
});

$(document).ready(function(){
      $('.slider').slider({full_width: true});
      $('.parallax').parallax();
    });
