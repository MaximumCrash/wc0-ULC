var u,l;

$.getJSON("js/data.json", function(result) {
u = result;
});

$(".link").on("click", function () {
  l = parseInt($(this).attr('data-go'));
  switch($(this).attr('data-type')) {
    case "page" : {
      window.location =  u.link[l];
      break;
    }
    case "email" : {
      window.location = "mailto:" +  u.link[l];
      break;
    }
    case "phone" : {
      window.location = "tel:" +  u.link[l];
      break;
    }
    case "outer" : {
      window.open( "http://" +u.link[l],'_blank');
      break;
    }
  }
});


$(".links > li").on("click", function () {
  l = parseInt($(this).attr('data-go'));
  switch($(this).attr('data-type')) {
    case "page" : {
      window.location = u.link[l];
      break;
    }
    case "email" : {
      window.location = "mailto:" +  u.link[l];
      break;
    }
    case "phone" : {
      window.location = "tel:" +  u.link[l];
      break;
    }
    case "outer" : {
      window.open( u.link[l],'_blank');
      break;
    }
  }
});


$(".button").on("click", function () {
  l = parseInt($(this).attr('data-go'));
  switch($(this).attr('data-type')) {
    case "page" : {
      window.location = u.link[l];
      break;
    }
    case "email" : {
      window.location = "mailto:" +  u.link[l];
      break;
    }
    case "phone" : {
      window.location = "tel:" +  u.link[l];
      break;
    }
    case "outer" : {
      window.open( u.link[l],'_blank');
      break;
    }
  }
});

$(document).ready(function(){
      $('.slider').slider({full_width: true});
      $('.parallax').parallax();
    });
