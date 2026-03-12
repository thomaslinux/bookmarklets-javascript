# bookmarklets-javascript

a repository for various bookmarklets

You can add a bookmark that runs a javascript code in the console.

https://stackoverflow.com/questions/9104/add-a-bookmark-that-is-only-javascript-not-a-url

https://en.wikipedia.org/wiki/Bookmarklet

[https://mastercaweb.unistra.fr/actualites/culture-web/bookmarklet/](https://mastercaweb.unistra.fr/actualites/culture-web/bookmarklet/#:~:text=Comment%20cr%C3%A9er%20son%20propre%20bookmarklet%20%3F)

# Instructions

Add bookmarks with this codes :

Name : Alert Hello World
URL :
```javascript
javascript:alert('Hello World !');
```

Name : Remove all checks of input
URL :
```javascript
javascript:(document.querySelectorAll('*').forEach(e => {e.removeAttribute('pattern');e.removeAttribute('required');});)
```

Name : Search current date
URL :
```javascript
javascript:window.location='https://duckduckgo.com/?q='+Date()
```
