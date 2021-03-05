# DOM

## How to divide JS and HTML

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
___