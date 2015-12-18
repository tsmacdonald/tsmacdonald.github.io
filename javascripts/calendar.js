(function() {
  $(function() {
    return $(".calendar-season-title").click(function() {
      var $arrow, $season, $title, newArrow;
      $title = $(this);
      $season = $title.next();
      $arrow = $title.find(".calendar-season-title-arrow");
      newArrow = $season.is(":visible") ? "&#9656;" : "&#9662;";
      $arrow.html(newArrow);
      return $title.next().slideToggle();
    });
  });

}).call(this);
