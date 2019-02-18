const APIUtil = require('./apiUtils')

class FollowToggle {
  constructor(el, options) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');

    render();

    this.$el.on('click', this.handleClick.bind(this));
  }

  render() {
    if (this.followState === 'unfollowed') {
      this.$el.html('Follow!');
      this.$el.prop('disabled', false)
    } else {
      this.$el.html('Unfollow!');
      this.$el.prop('disabled', false)
    }
  }

  handleClick(event) {
    let button = this;

    event.preventDefault();

    if (this.followState === 'followed') {
      this.followState = 'unfollowing'
      this.render()
      APIUtil.changeFollowStatus(this.userId, "DELETE").then(() => {
        button.followState = 'unfollowed'
        button.render()
      })
    } else if (this.followState === 'unfollowed') {
      this.followState = 'following'
      this.render()
      APIUtil.changeFollowStatus(this.userId, "POST").then(() => {
        button.followState = 'followed'
        button.render()
      })
    }
  }
}

module.exports = FollowToggle;