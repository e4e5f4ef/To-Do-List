$(document).ready(function () {
  $(".header-button").click(function () {
    if ($(".header-input").val() != "") {
      $(".to-do-list").append(
        '<li class="to-do-list-item"><div class="list-item"><p class="list-item-text-before">✓</p><p class="list-item-text">' +
          $(".header-input").val() +
          '</p></div><p class="list-item-delete-button">×</p></li>'
      );
      $(".header-input").val("");
    }
  });

  $(document).on("click", ".list-item-delete-button", function () {
    $(this).parent().remove();
  });

  $(document).on("click", ".to-do-list-item", function () {
    if ($(this).hasClass("checked")) {
      $(this).removeClass("checked");
    } else $(this).addClass("checked");
  });
});
