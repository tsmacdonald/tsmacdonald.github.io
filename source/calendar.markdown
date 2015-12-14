---
layout: page
title: "Calendar"
date: 2014-05-17 14:57
comments: false
sharing: false
footer: false
body_class: calendar-page
---
{% capture currentUnixTimestamp %}{{ "now" | date: "%s" }}{% endcapture %}
<table class="calendar">
  <tbody>
    {% include custom/calendar_event_list.html title="Upcoming performances" pastOrFuture="future" %}
    {% include custom/calendar_event_list.html title="Past performances" pastOrFuture="past" %}
  </tbody>
</table>

Interested in having Tim play at your event? [Book him now!](/contact.html)
