function addPost() {
    $.ajax({
        url: '/api/post',
        type: 'POST',
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