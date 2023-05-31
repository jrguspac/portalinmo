// Variable para almacenar el número de celular ingresado
var phone = '';

// Escuchar el evento clic del botón Enviar
document.getElementById('send-button').addEventListener('click', function() {
  // Obtener el número de celular ingresado
  phone = document.getElementById('phone-input').value;

  // Validar que se haya ingresado un número de celular
  if (phone.trim() === '') {
    alert('Por favor, ingresa tu número de celular.');
    return; // Detener la ejecución si no se ha ingresado un número de celular
  }

  // Ocultar la pregunta y respuesta anterior
  var chatMessages = document.getElementById('chat-messages');
  chatMessages.innerHTML = '';

  // Mostrar nueva pregunta
  showMessage('Puedes escribir lo que buscas o seleccionar una de las siguientes opciones:');
  showOptions([
    {
      title: 'Deseo comprar un inmueble',
      link: 'venta.html'
    },
    {
      title: 'Estoy interesado en crédito hipotecario',
      link: 'hipotecario.html'
    },
    {
      title: 'Deseo vender mi inmueble',
      link: 'usuario.html'
    },
    {
      title: 'Busco un inmueble en arriendo',
      link: 'alquiler.html'
    },
    {
      title: 'Deseo saber sobre remodelaciones y construcción',
      link: 'construccion.html'
    }
  ]);

  // Ocultar input y botón
  document.getElementById('phone-input').style.display = 'none';
  document.getElementById('send-button').style.display = 'none';
});

// Función para mostrar un mensaje en el chat
function showMessage(message) {
  var chatMessages = document.getElementById('chat-messages');
  var newMessage = document.createElement('div');
  newMessage.classList.add('message', 'received');
  newMessage.innerHTML = '<p>' + message + '</p>';
  chatMessages.appendChild(newMessage);
}

// Función para mostrar las opciones en tarjetas de 3 columnas
function showOptions(options) {
  var chatMessages = document.getElementById('chat-messages');

  for (var i = 0; i < options.length; i++) {
    var newMessage = document.createElement('div');
    newMessage.classList.add('message', 'received');
    newMessage.innerHTML = '<div class="option"><a href="' + options[i].link + '">' + options[i].title + '</a></div>';
    chatMessages.appendChild(newMessage);
  }
}
