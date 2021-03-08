function displayCitations() {
    var quotes = document.getElementsByTagName('blockquote');

    for (var i = 0; i < quotes.length; i++) {
        var url = quotes[i].getAttribute('cite');
        var quoteChildren = quotes[i].getElementsByTagName('*');
        var elem = quoteChildren[quoteChildren.length - 1]
        var link = document.createElement('a')
        var link_text = document.createTextNode('Source')
        link.appendChild(link_text);
        link.setAttribute('href', url)
        var superscript = document.createElement('sup')
        superscript.appendChild(link)
        elem.appendChild(superscript)
    }
}

addLoadEvent(displayCitations)