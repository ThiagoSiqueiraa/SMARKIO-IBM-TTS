const API_ENDPOINT = 'http://localhost:3000';

let comments = [];

const addZero = number => {
  const numberWithZero = (number = (number > 9 ? '' : '0') + number);
  return numberWithZero;
};

const timestampToDate = timestamp => {
  const date = new Date(Date.parse(timestamp));

  const mm = date.getMonth() + 1;
  const dd = date.getDate();
  const y = date.getFullYear();

  return `${addZero(dd)}/${addZero(mm)}/${y} ${addZero(
    date.getHours()
  )}:${addZero(date.getMinutes())}`;
};

const renderComments = () => {
  let commentHtml = '';
  if (comments.length > 0) {
    comments.forEach(comment => {
      commentHtml += `<div class="card-content row">
      <p class="col-9">${comment.comment}</p>
      <div class="comment-items col-3">
        <audio preload="none" id="audio-${comment.id}">
          <source src=${API_ENDPOINT}/tts-watson/${comment.id} type="audio/wav">
        </audio>
        <button type="button" class="btn btn-secondary btn-block" onclick="play('${comment.id}')">
        OUVIR <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-play-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
      </svg>
      </button>
      </div>
    </div>`;
    });
  } else {
    commentHtml +=
      'Parece que não há nenhum comentário cadastrado, cadastre o primeiro!';
  }

  $('#comments').html(`<h2>Comentários</h3> ${commentHtml}`);
};

const comment = () => {
  const data = {
    comment: $('#comment').val(),
  };

  if (data.comment === '') {
    alert('O campo comentário é obrigatório!');
    return;
  }

  $.ajax({
    url: `${API_ENDPOINT}/comments`,
    type: 'post',
    contentType: 'application/json',
    data: JSON.stringify(data),
    success(response) {
      if (response.status === 'error') {
        alert('Ocorreu erro na execução, tente novamente');
        return false;
      }
      comments.push(response);
      renderComments();
    },
    error() {
      alert('Ocorreu erro na execução, tente novamente');
    },
  });
};

const list = () => {
  $.ajax({
    url: `${API_ENDPOINT}/comments`,
    type: 'get',
    contentType: 'application/json',
    success(response) {
      if (response.status === 'error') {
        alert('Ocorreu erro na execução, tente novamente');
        return false;
      }

      comments = response;
      renderComments();
    },
    error() {
      alert('Ocorreu erro na execução, tente novamente');
    },
  });
};

function play(id) {
  $(`#audio-${id}`).get(0).play();
}

$(document).ready(() => {
  $('#commentForm button').click(comment);

  list();
});
