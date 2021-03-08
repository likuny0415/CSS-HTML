function displayAcc() {
    var accesskeys = document.getElementsByTagName('a');

    var defs = new Array()
    for (var i = 0; i < accesskeys.length; i++) {
        var current_key = accesskeys[i];
        var accessValue = current_key.getAttribute('accesskey');
        var text = current_key.lastChild.nodeValue;
        defs[accessValue] = text;
    }

    var ul_list = document.createElement('ul')

    for (key in defs) {
        var li_ele = document.createElement('li');
        var li_text = document.createTextNode(key + " :" + defs[key]);
        li_ele.appendChild(li_text);
        ul_list.appendChild(li_ele);
    }

    var head = document.createElement('h3')
    var head_text = document.createTextNode('AccessKeys')
    head.appendChild(head_text)
    document.body.appendChild(head)
    document.body.appendChild(ul_list)
}

addLoadEvent(displayAcc)