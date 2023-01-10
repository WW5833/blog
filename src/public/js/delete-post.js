function deletePost(id) {
    $.ajax({
        url: `/api/post/${id}`,
        type: 'DELETE',
        success: result => {
            window.location.href = '/';
        },
        fail: (req, status, error) => {
            console.log(error);
        }
    });
}