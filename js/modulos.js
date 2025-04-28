document.addEventListener('DOMContentLoaded', function() {
    const header = '<img src="img/pokemon-2.png" alt="Logo"><nav><ul><li><a href="/index.html">Equipo</a></li><li><a href="/html/a.html">Bolsa</a></li><li><a href="/html/b.html">Perfil</a></li></ul></nav>';
    const footer = '<footer><p>Jesus Baute y Patricio Muras</p><p>© 2025 Liga Pokémon</p></footer>';
    document.querySelector('header').innerHTML = header;
    document.querySelector('footer').innerHTML = footer;
});