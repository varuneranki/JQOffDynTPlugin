$(function(){
    var lang = [];
  $.getJSON('lang.json', function(data) {
    $.each(data.lang, function(i, f) {
      var divX = document.createElement('div'),
      divY = document.createElement('div');
      var aX = document.createElement('a');
      var bX = document.createElement('a');
      aX.className = 'name';
      bX.className = 'sent';
      aX.innerHTML = f.name;
      bX.innerHTML = f.sent;
      $(aX).appendTo(divX);
      $(divX).appendTo("#idaX");
      $(bX).appendTo(divY);
      $(divY).appendTo("#idaX");
    });
  });
});