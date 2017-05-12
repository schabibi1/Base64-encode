$(function () {
  $("#mail").click(function () {
    var iAmComplicated = function () { return atob('aGVsbG9Ad29ybGQuY29t') };
    $(this).attr("href", 'mailto:' + iAmComplicated());
    $(this).hide(iAmComplicated());
    $(this).show('.fa-envelope-o');
    $(this).off("click");
    preventDefault();
  });
});
