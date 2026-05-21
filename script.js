// CARREGA FEEDBACKS SALVOS

window.onload = function(){

  let feedbacksSalvos =
  localStorage.getItem('feedbacksQuickTalent');

  if(feedbacksSalvos){

    document.getElementById('listaFeedbacks').innerHTML =
    feedbacksSalvos;

  }

}

// ADICIONA FEEDBACK

function adicionarFeedback(){

  let nome =
  document.getElementById('nomeFeedback').value;

  let mensagem =
  document.getElementById('mensagemFeedback').value;

  if(nome.trim() === '' || mensagem.trim() === ''){

    alert('Preencha todos os campos.');

    return;

  }

  let lista =
  document.getElementById('listaFeedbacks');

  let novoFeedback =
  document.createElement('div');

  novoFeedback.classList.add('feedback');

  novoFeedback.innerHTML = `

    <p>
      "${mensagem}"
    </p>

    <h4>
      — ${nome}
    </h4>

  `;

  lista.prepend(novoFeedback);

  // SALVA NO NAVEGADOR

  localStorage.setItem(
    'feedbacksQuickTalent',
    lista.innerHTML
  );

  // LIMPA OS CAMPOS

  document.getElementById('nomeFeedback').value = '';

  document.getElementById('mensagemFeedback').value = '';

}