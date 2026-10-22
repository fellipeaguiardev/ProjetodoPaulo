const form = document.querySelector('.filtros');
const vagas = document.querySelectorAll('.vaga');

// Deixa o texto minúsculo e sem acento: "Júnior" vira "junior"
function limpar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filtrar() {
  let tecnologia = limpar(form.tecnologia.value);
  const senioridade = limpar(form.senioridade.value);
  const modalidade = form.modalidade.value;

  // Nos cards está escrito C++ e C#, mas no select o valor é cpp e csharp
  if (tecnologia === 'cpp') tecnologia = 'c++';
  if (tecnologia === 'csharp') tecnologia = 'c#';

  for (const vaga of vagas) {
    const texto = limpar(vaga.textContent);
    const techs = limpar(vaga.querySelector('.tecnologias-vaga').textContent)
      .split('—')
      .map(t => t.trim());

    let mostrar = true;

    if (tecnologia !== '' && !techs.includes(tecnologia)) {
      mostrar = false;
    }

    if (senioridade !== '' && !texto.includes(senioridade)) {
      mostrar = false;
    }

    if (modalidade === 'home-office' && !texto.includes('home office') && !texto.includes('remoto')) {
      mostrar = false;
    }
    if (modalidade === 'hibrido' && !texto.includes('hibrido')) {
      mostrar = false;
    }
    if (modalidade === 'presencial' && !texto.includes('presencial')) {
      mostrar = false;
    }

    vaga.style.display = mostrar ? '' : 'none';
  }
}

form.addEventListener('submit', function (e) {
  e.preventDefault(); // impede a página de recarregar
  filtrar();
});
  


// ---------- Botão Candidatar-se ----------
for (const vaga of vagas) {
  const botao = document.createElement('button');
  botao.type = 'button';
  botao.className = 'botao-candidatar';
  botao.textContent = 'Candidatar-se';

  botao.addEventListener('click', function () {
    botao.textContent = 'Candidatura enviada';
    botao.disabled = true;
  });

  vaga.appendChild(botao);
}