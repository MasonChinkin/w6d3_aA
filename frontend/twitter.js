const FollowToggle = require('./followToggle')

$(function () {
  $('button.follow-toggle').each((i, button) => new FollowToggle(button, {}));
})