$.get('/api/post', data => {
    console.log(data);
    tow = `<div class="row">`;
    for (let i = 0; i < data.length; i++) {
        const post = data[data.length - 1 - i];
        tow += constructPost(post);
        // let width = window.innerWidth;
        // if(width < 768) {
        //     tow += `</div><div class="row">`;
        // }
        // else if(width < 992) {
        //     if(i % 2 == 1) {
        //         tow += `</div><div class="row">`;
        //     }
        // }
        // else {
        //     if(i % 3 == 2) {
        //         tow += `</div><div class="row">`;
        //     }
        // }
    }

    $('#posts').html(tow + "</div>");
});

function constructPost(post) {
    let content = post.content;

    if(content.length > 400) {
        content = content.substring(0, 400) + '...';
    }

    let lines = 1;
    while (content.indexOf("\n") != -1) {
        if(lines > 5) {
            content = content.substring(0, content.indexOf("\n"));
            break;
        }
        content = content.replace("\n", "<br />");
        lines++;
    }

    let image = `<img src="${post.image}" alt="NoImage" />`;
    if(post.image == '' || post.image == null) {
        image = '';
    }

    let date = new Date(post.date);

    return `
        <div class="post col-md-4 col-sm-6 col-12">
            <button class="show_post_button" onClick="window.location.href = '/post/${post._id}';">
                <div class="postHeader">
                    ${image}
                    <h2>${post.title}</h2>
                    <p>${date.toLocaleString()}</p>
                </div>
                <hr />
                <div class="postContent">
                    <p>${content}</p>
                </div>
            </button>
        </div>
    `;
}