# DOM

## How to divide JS and HTML

### Situation 1

```html
<a href='www.example.com' class = 'popup'></a>
```

```javascript
/*
window.onload： after finishing loading HTML file, instanstly loading this method 
*/
window.onload = prepareLinks;

function prepareLinks() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].getAttribute('class') == 'popup') {
            links[i].onclick = function() {
                popUp(this.getAttribute('href'));
                return false
            }
        }
    }
}

function popUp(url) {
    /*
    open the given url in a new window
    */
    window.open(url,'popUp', "width=500, height=600")
}
```

### Situation 2
```html
<ul id='imagegallery'>
    <li>..<>
    <li>..<>
    <li>..<>
</ul>
```
```javascript

function prepareGallery() {
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a')

    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function() {
            showPic(this)
            return false;
        }
    }
}
```

### Problem

- window.load() could exectue the last method
- How to solve it

First Way
```javascript
// only use this method when few methods are needed to be called
window.onload = function() {
    methodOne();
    methodTwo()
}
```
Second Way
```javascript
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
}
// call this method everytime when you create a new method
addLoadEvent(func1);
addLoadEvent(func2);
```
___