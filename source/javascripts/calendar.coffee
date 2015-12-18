---
---

$ ->
  $(".calendar-season-title").click ->
    $title = $(this)
    $season = $title.next();
    $arrow = $title.find(".calendar-season-title-arrow")

    newArrow = if $season.is(":visible") then "&#9656;" else "&#9662;"
    $arrow.html newArrow
    $title.next().slideToggle()
