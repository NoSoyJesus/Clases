document.addEventListener('DOMContentLoaded', function() {
    const header = '<img src="/img/solidarity_5208516.png" alt="Logo"><nav><ul><li><a href="/index.html">Inico</a></li><li><a href="/html/a.html">Prueba</a></li><li><a href="/html/b.html">Prueba2</a></li></ul></nav>';
    const footer = '<footer><p>Jesus Baute y Patricio Muras</p><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></footer>';
    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
});