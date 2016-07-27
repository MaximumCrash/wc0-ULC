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

$(window).resize(function () {
  if ($(window).width() > 890) {
    $('.button-collapse').sideNav("hide");
  }
})

$(document).ready(function(){
      $('.slider').slider({full_width: true});
      $('.parallax').parallax();
      $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );


    });
