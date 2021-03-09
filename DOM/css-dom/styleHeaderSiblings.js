function addLoadEvent(func) {
    var oldonload = window.onload
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
addLoadEvent(styleHeaderSiblings)

function styleHeaderSiblings() {
    var headers = document.getElementsByTagName('h1')

    for (var i = 0; i < headers.length; i++) {
        var elem = getNextElement(headers[i].nextSibling)
        
        addClass(elem, 'intro')
    }
}


function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling)
    }
    return null
}

function addClass(element, value) {
    if (!element.className) {
        element.className = value
    } else {
        newClassName = element.className
        newClassName += ' '
        newClassName += value
        element.clasName = newClassName
    }
}