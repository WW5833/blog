function editPost(id) {
    $.ajax({
        url: `/api/post/${id}`,
        type: 'PUT',
        data: {
            title: $('#title').val(),
            content: $('#content').val(),
        },
        success: result => {
            window.location.href = '/';
        },
        fail: (req, status, error) => {
            console.log(error);
        }
    });
}