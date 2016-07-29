var u, l;
var open = false;

$.getJSON("js/data.json", function(result) {
  u = result;
});

$(".link").on("click", function() {
  l = parseInt($(this).attr('data-go'));
  switch ($(this).attr('data-type')) {
    case "page":
      {
        window.location = u.link[l];
        break;
      }
    case "email":
      {
        window.location = "mailto:" + u.link[l];
        break;
      }
    case "phone":
      {
        window.location = "tel:" + u.link[l];
        break;
      }
    case "outer":
      {
        window.open("http://" + u.link[l], '_blank');
        break;
      }
  }
});


$(".links > li").on("click", function() {
  l = parseInt($(this).attr('data-go'));
  switch ($(this).attr('data-type')) {
    case "page":
      {
        window.location = u.link[l];
        break;
      }
    case "email":
      {
        window.location = "mailto:" + u.link[l];
        break;
      }
    case "phone":
      {
        window.location = "tel:" + u.link[l];
        break;
      }
    case "outer":
      {
        window.open(u.link[l], '_blank');
        break;
      }
  }
});

$('body').on('click', function(e) {
  if ($(e.target).attr("id") == "materialize-lean-overlay-1" || $(e.target).attr("id") == "materialize-lean-overlay-2" || $(e.target).attr("id") == "materialize-lean-overlay-3") {
    open = false;
    switchOverlay(open, null)
  }


});

$(".button").on("click", function() {
  l = parseInt($(this).attr('data-go'));
  switch ($(this).attr('data-type')) {
    case "page":
      {
        window.location = u.link[l];
        break;
      }
    case "email":
      {
        window.location = "mailto:" + u.link[l];
        break;
      }
    case "phone":
      {
        window.location = "tel:" + u.link[l];
        break;
      }
    case "outer":
      {
        window.open(u.link[l], '_blank');
        break;
      }
  }
});




$(".lean-overlay").on("click", function() {
  console.log("HELLO!")
  $(".leadercard").removeClass("more");
  $(".flexcards.leaders.mobile").animate({
    "margin-top": "35px",
    "opacity": "0"
  }, {
    complete: function() {
      $(".flexcards.leaders.mobile").css({
        "width": "0",
        "height": "0",
      });
    }
  })
})
$(".leadercard").on("click", function() {
  $(this).css({
    "z-index": "2005"
  })
  var indx = $(this).index();
  if (!open) {
    open = true;
    $(this).addClass("more");
    switchOverlay(open, indx);
  } else {
    open = false;
    $("#modal2").closeModal();
    switchOverlay(open,indx);
  }

})

$(window).resize(function() {
  if ($(window).width() > 890) {
    $('.button-collapse').sideNav("hide");
    open = false;
    $("#modal2").closeModal();
    switchOverlay(open, null);
  } else {
      if (open) {
        open = false;
        $("#modal2").closeModal();
        switchOverlay(open, null);
      }
    }
  });

function switchOverlay(bo,indx) {
  if (bo) {
    $(".flexcards.leaders.mobile").css({
      "top": "10"
    })
    switch (indx) {
      case 0:
        {
          $(".flexcards.leaders.mobile > div > .leadpic").css({
            "background-image": "url(/images/jpg/leader" + indx.toString() + ".jpg)",
            "background-size": "109%!important"
          });
          $(".flexcards.leaders.mobile > div > .f-smalltomicrotolarge").html("Michelle Jones-Johnson");
          $(".flexcards.leaders.mobile > div > .f-microtosmall").html("Founder & President");
          $(".flexcards.leaders.mobile > div > .footer-header").removeClass().addClass("footer-header leader" + indx.toString());
          $(".flexcards.leaders.mobile > div > .footer-header").css({
            "height": "8px",
            "bottom": "0",
            "position": "absolute"
          })
          break;
        }
      case 1:
        {
          $(".flexcards.leaders.mobile > div > .leadpic").css({
            "background-image": "url(/images/jpg/leader" + indx.toString() + ".jpg)",
            "background-size": "167%!important",
            "background-position": "37% 20%"
          });
          $(".flexcards.leaders.mobile > div > .f-smalltomicrotolarge").html("Dr.Gary Gemmill");
          $(".flexcards.leaders.mobile > div > .f-microtosmall").html("Consultant");
          $(".flexcards.leaders.mobile > div > .footer-header").removeClass().addClass("footer-header leader" + indx.toString());
          $(".flexcards.leaders.mobile > div > .footer-header").css({
            "height": "8px",
            "bottom": "0",
            "position": "absolute"
          })
          break;
        }
      case 2:
        {
          $(".flexcards.leaders.mobile > div > .leadpic").css({
            "background-image": "url(/images/jpg/leader" + indx.toString() + ".jpg)",
            "background-size": "120%!important",
            "background-position": "50% 8%"
          });
          $(".flexcards.leaders.mobile > div > .f-smalltomicrotolarge").html("Scott Temple");
          $(".flexcards.leaders.mobile > div > .f-microtosmall").html("Consultant");
          $(".flexcards.leaders.mobile > div > .footer-header").removeClass().addClass("footer-header leader" + indx.toString());
          $(".flexcards.leaders.mobile > div > .footer-header").css({
            "height": "8px",
            "bottom": "0",
            "position": "absolute"
          })
          break;
        }
      case 3:
        {
          $(".flexcards.leaders.mobile > div > .leadpic").attr("style", "background-size:100% !important")
          $(".flexcards.leaders.mobile > div > .leadpic").css({
            "background-image": "url(/images/jpg/leader" + indx.toString() + ".jpg)",
            "background-position": "50% 13%"
          });

          $(".flexcards.leaders.mobile > div > .f-smalltomicrotolarge").html("Therese Gleason Carr");
          $(".flexcards.leaders.mobile > div > .f-microtosmall").html("Consultant");
          $(".flexcards.leaders.mobile > div > .footer-header").removeClass().addClass("footer-header leader0");
          $(".flexcards.leaders.mobile > div > .footer-header").css({
            "height": "8px",
            "bottom": "0",
            "position": "absolute"
          })
          break;
        }
    }
    $(".flexcards.leaders.mobile").css({
      "width": "100%",
      "height": "auto",
    });
    $(".flexcards.leaders.mobile").animate({
      "margin-top": "10px",
      "opacity": "1"
    });


    $("#modal2 > div > p").html(u.leaderinfo[indx]);

    $("#modal2").openModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .5, // Opacity of modal background
      in_duration: 300, // Transition in duration
      out_duration: 164, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
      ready: function() {}, // Callback for Modal open
      complete: function() {
          open = false;
        } // Callback for Modal close
    });
  }
  else {
    $(".flexcards.leaders.mobile").animate({
      "margin-top": "35px",
      "opacity": "0"
    }, {
      complete: function() {
        $(".flexcards.leaders.mobile").css({
          "width": "0",
          "height": "0",
          "top": "-2000"
        });

      }
    })

    $(".leadercard").removeClass("more");
    $(".leadercard").css({
      "z-index": "0"
    })
  }
}

$(document).ready(function() {
  $('.slider').slider({
    full_width: true
  });
  $('.parallax').parallax();
  $('.button-collapse').sideNav({
    menuWidth: 300, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
  $('.modal-trigger').leanModal();
});
