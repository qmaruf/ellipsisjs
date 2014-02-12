var ellipsisJs = function (selector, maxLength) {
    var ellipsis = "...";
    $(selector).each(function () {
        var content = $(this).html();
        if (content.length >= maxLength) {
            content = content.substr(0, maxLength - ellipsis.length);
            $(this).attr('style', 'word-wrap: break-word');
            var clippedContent = content + ellipsis;
            $(this).html(clippedContent);
        }
    });
};
