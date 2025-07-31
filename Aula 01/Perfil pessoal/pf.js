function abrirperfil(idPerfil) {
  const paginas = {
    pfcharlo: 'charlo.html',
    pfotavio: 'otavio.html',
    pfeduard: 'eduardo.html'
  };
  const pagina = paginas[idPerfil];
  if (pagina) {
    window.location.href = pagina; 
  } else {
    alert('Perfil não encontrado!');
  }
}
