function setCookie(c_name, value, exdays) {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value = escape(value) + ((exdays == null) ? '' : '; expires=' + exdate.toUTCString());
  document.cookie = c_name + '=' + c_value + ';path=/';
}

/* exported hideSideBar */
function hideSideBar(popup) {
  if ($('#sidebar').is(':visible')) {
    $('#sidebar').addClass('sidebar_hidden');
    $('#content').addClass('sidebar_hidden');
    $('#hideSidebarButton').addClass('sidebar_hidden');
    if (!popup) { setCookie('sidebar_hide', 'hide', 100); }
  } else {
    $('#sidebar').removeClass('sidebar_hidden');
    $('#content').removeClass('sidebar_hidden');
    $('#hideSidebarButton').removeClass('sidebar_hidden');
    if (!popup) { setCookie('sidebar_hide', 'show', 100); }
  }
}

$(function() {
  $('#context-menu').appendTo('#main');
});
