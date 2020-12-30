$(function () {

  $('.faq__acordion-js').on('click', function () {

    if ($(this).next('.acordion-js').hasClass('open')) {
      // 全ての項目をclose
      $('.acordion-js').removeClass('open');
      $('.acordion-js').slideUp(300);
    } else {
      // 全ての項目をclose
      $('.acordion-js').removeClass('open');
      $('.acordion-js').slideUp(300);
      // その項目だけをopen
      $(this).next('.acordion-js').addClass('open');
      $(this).next('.acordion-js').slideDown(300);
    }
  });

  // ナビメニュークリック時のスムーススクロール
  $('.header__link').click(function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == "" ? 'html' : href);
    var headerHeight = $('.header').height() + 71;
    var position = target.offset().top - headerHeight;
    $('html, body').animate({ scrollTop: position }, 1000);
    return false;
  });

  // ナビメニュークリック時のスムーススクロール
  $('.sp--nav__link').click(function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == "" ? 'html' : href);
    var headerHeight = $('.header').height() + 71;
    var position = target.offset().top - headerHeight;
    $('html, body').animate({ scrollTop: position }, 1000);
    return false;
  });

  // お問い合わせボタンクリック時のスムーススクロール
  $('.common--button').click(function () {
    var href = $(this).attr('href');
    var target = $(href == '#' || href == "" ? 'html' : href);
    var headerHeight = $('.header').height() + 71;
    var position = target.offset().top - headerHeight;
    $('html, body').animate({ scrollTop: position }, 1000);
    return false;
  });

  const $submitBtn = $('#js-submit');
  $('#form input,#form textarea').on('change', function () {
    if (
      $('#form input[type="text"]').val() !== "" &&
      $('#form input[type="email"]').val() !== "" &&
      $('#form input[type="checkbox"]').val() !== "" &&
      $('#form #privacyCheck').prop('checked') === true
    ) {
      $submitBtn.prop('disabled', false);

    } else {
      $submitBtn.prop('disabled', true);
    }
  });

  $('#button').on('click', function () {
    $('html, body').addClass('scroll-prevent');
    $('.sp--nav').addClass('navopen');
  });

  $('.sp--nav__link').on('click', function () {
    $('html, body').removeClass('scroll-prevent');
    $('.sp--nav').removeClass('navopen');
  });

  // HTMLフォームのgoogleフォーム連携
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/hogehoge",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".contact__button").fadeOut();
          window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});