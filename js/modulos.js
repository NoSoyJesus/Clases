document.addEventListener('DOMContentLoaded', function() {
    const header = '<img src="/img/solidarity_5208516.png" alt="Logo"><nav><ul><li><a href="/html/a.html">A</a></li><li><a href="/html/b.html">B</a></li><li><a href="/index.html">Home</a></li></ul></nav>';
    const footer = '<footer><p>Pato Y Jesus</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></footer>';
    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
});