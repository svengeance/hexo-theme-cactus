/**
* Thumbnail Helper
* @description Get the thumbnail url from a post
* @example
*     <%- thumbnail(post) %>
*/
hexo.extend.helper.register('thumbnail', function (post) {
    return 'test' || post.thumbnail || post.banner || 'https://sven.ai/images/mally_ico.png';
});
