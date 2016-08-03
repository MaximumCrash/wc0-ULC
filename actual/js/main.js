function switchOverlay(a, b) {
    if (a) {
        switch ($(".flexcards.leaders.mobile").css({
            top: "10"
        }), b) {
            case 0:
                $(".flexcards.leaders.mobile > div > .leadpic").css({
                    "background-image": "url(/images/jpg/leader" + b.toString() + ".jpg)",
                    "background-size": "109%!important"
                }), $(".flexcards.leaders.mobile > div > .f-smalltomicrotolarge").html("Michelle Jones-Johnson"), $(".flexcards.leaders.mobile > div > .f-microtosmall").html("Founder & President"), $(".flexcards.leaders.mobile > div > .footer-header").removeClass().addClass("footer-header leader" + b.toString()), $(".flexcards.leaders.mobile > div > .footer-header").css({
                    height: "8px",
                    bottom: "0",
                    position: "absolute"
                });
                break;
            case 1:
                $(".flexcards.leaders.mobile > div > .leadpic").css({
                    "background-image": "url(/images/jpg/leader" + b.toString() + ".jpg)",
                    "background-size": "167%!important",
                    "background-position": "37% 20%"
                }), $(".flexcards.leaders.mobile > div > .f-smalltomicrotolarge").html("Dr.Gary Gemmill"), $(".flexcards.leaders.mobile > div > .f-microtosmall").html("Consultant"), $(".flexcards.leaders.mobile > div > .footer-header").removeClass().addClass("footer-header leader" + b.toString()), $(".flexcards.leaders.mobile > div > .footer-header").css({
                    height: "8px",
                    bottom: "0",
                    position: "absolute"
                });
                break;
            case 2:
                $(".flexcards.leaders.mobile > div > .leadpic").css({
                    "background-image": "url(/images/jpg/leader" + b.toString() + ".jpg)",
                    "background-size": "120%!important",
                    "background-position": "50% 8%"
                }), $(".flexcards.leaders.mobile > div > .f-smalltomicrotolarge").html("Scott Temple"), $(".flexcards.leaders.mobile > div > .f-microtosmall").html("Consultant"), $(".flexcards.leaders.mobile > div > .footer-header").removeClass().addClass("footer-header leader" + b.toString()), $(".flexcards.leaders.mobile > div > .footer-header").css({
                    height: "8px",
                    bottom: "0",
                    position: "absolute"
                });
                break;
            case 3:
                $(".flexcards.leaders.mobile > div > .leadpic").attr("style", "background-size:100% !important"), $(".flexcards.leaders.mobile > div > .leadpic").css({
                    "background-image": "url(/images/jpg/leader" + b.toString() + ".jpg)",
                    "background-position": "50% 13%"
                }), $(".flexcards.leaders.mobile > div > .f-smalltomicrotolarge").html("Therese Gleason Carr"), $(".flexcards.leaders.mobile > div > .f-microtosmall").html("Consultant"), $(".flexcards.leaders.mobile > div > .footer-header").removeClass().addClass("footer-header leader0"), $(".flexcards.leaders.mobile > div > .footer-header").css({
                    height: "8px",
                    bottom: "0",
                    position: "absolute"
                })
        }
        $(".flexcards.leaders.mobile").css({
            width: "100%",
            height: "auto"
        }), $(".flexcards.leaders.mobile").animate({
            "margin-top": "10px",
            opacity: "1"
        }), $("#modal2 > div > p").html(u.leaderinfo[b]), $("#modal2").openModal({
            dismissible: !0,
            opacity: .5,
            in_duration: 300,
            out_duration: 164,
            starting_top: "4%",
            ending_top: "10%",
            ready: function() {},
            complete: function() {
                open = !1, switchOverlay(open, b)
            }
        })
    } else $(".flexcards.leaders.mobile").animate({
        "margin-top": "35px",
        opacity: "0"
    }, {
        complete: function() {
            $(".flexcards.leaders.mobile").css({
                width: "0",
                height: "0",
                top: "-2000"
            })
        }
    }), $(".leadercard").removeClass("more"), $(".leadercard").css({
        "z-index": "0"
    })
}
var u, l, open = !1;
$.getJSON("../js/data.json", function(a) {
    u = a
}), $("#contactform").submit(function(a) {
    a.preventDefault(), this.submit()
}), $(".link").on("click", function() {
    switch (l = parseInt($(this).attr("data-go")), $(this).attr("data-type")) {
        case "page":
        //    window.location = u.link[l];
            break;
        case "email":
        //    window.location = "mailto:" + u.link[l];
            break;
        case "phone":
        //    window.location = "tel:" + u.link[l];
            break;
        case "outer":
        //    window.location = u.link[l]
    }
}), $(".links > li").on("click", function() {
    switch (l = parseInt($(this).attr("data-go")), $(this).attr("data-type")) {
        case "page":
        //    window.location = u.link[l];
            break;
        case "email":
        //    window.location = "mailto:" + u.link[l];
            break;
        case "phone":
      //      window.location = "tel:" + u.link[l];
            break;
        case "outer":
      //      window.location = u.link[l]
    }
}), $("body").on("click", function(a) {
    "materialize-lean-overlay-1" != $(a.target).attr("id") && "materialize-lean-overlay-2" != $(a.target).attr("id") && "materialize-lean-overlay-3" != $(a.target).attr("id") || (open = !1, switchOverlay(open, null))
}), $(".button").on("click", function() {
    switch (l = parseInt($(this).attr("data-go")), $(this).attr("data-type")) {
        case "page":
        //    window.location = u.link[l];
            break;
        case "email":
      //      window.location = "mailto:" + u.link[l];
            break;
        case "phone":
      //      window.location = "tel:" + u.link[l];
            break;
        case "outer":
        //    window.location = u.link[l]
    }
}), $(".lean-overlay").on("click", function() {
    console.log("HELLO!"), $(".leadercard").removeClass("more"), $(".flexcards.leaders.mobile").animate({
        "margin-top": "35px",
        opacity: "0"
    }, {
        complete: function() {
            $(".flexcards.leaders.mobile").css({
                width: "0",
                height: "0"
            })
        }
    })
}), $(".leadercard").on("click", function() {
    $(this).css({
        "z-index": "2005"
    });
    var a = $(this).index();
    open ? (open = !1, $("#modal2").closeModal(), switchOverlay(open, a)) : (open = !0, $(this).addClass("more"), switchOverlay(open, a))
}), $(window).resize(function() {
    $(window).width() > 890 ? ($(".button-collapse").sideNav("hide"), open = !1, $("#modal2").closeModal(), switchOverlay(open, null)) : open && (open = !1, $("#modal2").closeModal(), switchOverlay(open, null))
}), $(document).ready(function() {
    function a() {
        $(".accordion .accordion-section-title").removeClass("active"), $(".accordion .accordion-section-content").slideUp(500).removeClass("open")
    }
    console.log(), $(".accordion-section-title").click(function(b) {
        var c = $(this).attr("href");
        $(b.target).is(".active") ? ("http://localhost:3000/contact.html" == window.location.href ? $(this).html("Submit A Request") : $(this).html("See More Tesitmonials"), a()) : ($(this).html("Hide"), a(), $(this).addClass("active"), $(".accordion " + c).slideDown(300).addClass("open")), b.preventDefault()
    }), $(".slider").slider({
        full_width: !0
    }), $(".parallax").parallax(), $(".button-collapse").sideNav({
        menuWidth: 300,
        edge: "left",
        closeOnClick: !0
    }), $(".modal-trigger").leanModal(), $(".carousel").carousel(), $(".carouso").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: !0,
        autoplaySpeed: 3e3,
        dots: !0,
        arrows: !1,
        infinite: !0,
        adaptiveHeight: !0,
        speed: 700,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !0
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: !0,
                dots: !1
            }
        }]
    })
});