$(".email").click(function () {
  window.location.href = "mailto:" + $(this).html() + "@yongehurst.com";
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

$(function () {
  $("form[name=signup]").submit(function (ev) {
    ev.preventDefault();

    var email = $('[name="email"]').val();

    if (email != "" && validateEmail(email)) {
      $(this).find("button, input").attr("disabled", "disabled");

      $.getJSON("email.php", { email: email }, function (data) {
        $('label[for="email"]').html(
          '<em style="color:#0a9936;">Oh thanks! We\'ll keep in touch.</em>'
        );
      });
    } else {
      $('label[for="email"]').html(
        '<em style="color:#C0301F;">Woops, I didn\'t get that - try again.</em>'
      );
    }
  });

  $(".btn-menu").click(function () {
    $(this).toggleClass("close");
    if ($(this).hasClass("close")) {
      $(".mainmenu").addClass("open");
    } else {
      $(".mainmenu").removeClass("open");
    }
  });

  $(".mainmenu li").click(function () {
    $(".btn-menu").removeClass("close");
    $(".mainmenu").removeClass("open");
  });

  // Anchor scrolling
  $(".mainmenu a, .slide").anchorScroll({
    offsetTop: parseFloat($(".mainmenu a").css("font-size")) * 2.65,
  });

  //Starting modal/popup
  // $('.modal').fadeIn().click(function() {
  //   $(this).fadeOut();
  // })
});
