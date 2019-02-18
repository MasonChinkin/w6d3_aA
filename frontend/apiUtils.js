const APIUtil = {
  changeFollowStatus: (id, method) => {
    $.ajax({
      url: `/users/${id}/follow`,
      dataType: 'json',
      method
    })
  }
}