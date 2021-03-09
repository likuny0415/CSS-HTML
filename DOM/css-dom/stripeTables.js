function stripeTables() {
    var table = document.getElementsByTagName('table')

    var odd, tr_ele;
    for (var i = 0; i < table.length; i++) {
        odd = false
        tr_ele = table[i].getElementsByTagName('tr')
        for (var j = 0; j < tr_ele.length; j++) {
            if (odd == true) {
                addClass(tr_ele[j], 'odd')
                odd = false
            } else {
                odd = true
            }
        }
    }
}

addLoadEvent(stripeTables)

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

function displayAbbr() {
    var abbreviations = document.getElementsByTagName('abbr')

    var def = new Array();
    for (var i = 0; i < abbreviations.length; i++) {
        var curr_abbr = abbreviations[i]
        // must add lastChild to get exact value
        var key = curr_abbr.lastChild.nodeValue
        var definition = curr_abbr.getAttribute('title')
        def[key] = definition
    }

    var dl = document.createElement('dl')
    for (key in def) {
        var title = document.createElement('dt')
        var title_text = document.createTextNode(key)
        title.appendChild(title_text)

        var dd = document.createElement('dd')
        var dd_text = document.createTextNode(def[key])
        dd.appendChild(dd_text)

        title.appendChild(dd)
        dl.append(title)
        
    }

    var head = document.createElement('h1')
    var header_text = document.createTextNode('Source')
    head.appendChild(header_text)
    document.body.appendChild(head)
    document.body.appendChild(dl)
}

addLoadEvent(displayAbbr)


function hightRows() {
    var rows = document.getElementsByTagName('tr')
    for (var i = 0; i < rows.length; i++) {
        rows[i].onmouseover = function() {
            this.style.fontWeight = 'bold'
        }
        rows[i].onmouseout = function() {
            this.style.fontWeight = 'normal'
        }
    }
}

addLoadEvent(hightRows)


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