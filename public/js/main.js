const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});

// Message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);

  // Scroll down
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

/* Message submit
chatForm.addEventListener('submit', e => {
  e.preventDefault();

  // Get message text
  //let msg = e.target.elements.msg.value;
  let msg = resultadu

  //msg = msg.trim();
  
  if (!msg){
    return false;
  }

  // Emit message to server
  socket.emit('chatMessage', msg);

  // Clear input
  e.target.elements.msg.value = '';
  e.target.elements.msg.focus();

});
*/

// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  const p = document.createElement('p');
  p.classList.add('meta');
  p.innerText = message.username + ' ';
  p.innerHTML += `<span>${message.time}</span>`;
  div.appendChild(p);
  const para = document.createElement('p');
  para.classList.add('text');
  para.innerText = message.text;
  div.appendChild(para);
  document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach(user=>{
    const li = document.createElement('li');
    li.innerText = user.username;
    userList.appendChild(li);
  });
 }

//Tiradas
window.onload = formTirada=()=> {



    var tr1 = document.createElement("TR");
    tr1.setAttribute('id', 'tr1');
    document.getElementById("main").appendChild(tr1);

      var td = document.createElement("TD");
      td.setAttribute('id', 'td');
      document.getElementById("tr1").appendChild(td);

      var span1 = document.createElement("SPAN");
      span1.innerHTML = "MAL HERIDO";
      document.getElementById("td").appendChild(span1);

    var td = document.createElement("TD");
      td.setAttribute('id', 'td1');
      document.getElementById("tr1").appendChild(td);

      var vida = document.createElement("INPUT");
      vida.setAttribute('id', 'vida');
      vida.setAttribute('type', 'checkbox');
      document.getElementById("td1").appendChild(vida);

  var tr = document.createElement("TR");
    tr.setAttribute('id', 'tr2');
    document.getElementById("main").appendChild(tr);

      var td = document.createElement("TD");
      td.setAttribute('id', 'td3');
      document.getElementById("tr2").appendChild(td);

      var span2 = document.createElement("SPAN");     
      document.getElementById("td3").appendChild(span2);
      span2.innerHTML = "COMPULSIÓN";

    var td = document.createElement("TD");
      td.setAttribute('id', 'td4');
      document.getElementById("tr2").appendChild(td);

      var compulsion = document.createElement("INPUT");
      compulsion.innerHTML = " ";
      compulsion.setAttribute('id', 'compulsion');
      compulsion.setAttribute('type', 'checkbox');
      document.getElementById("td4").appendChild(compulsion);

  var tr = document.createElement("TR");
    tr.setAttribute('id', 'tr3');
    document.getElementById("main").appendChild(tr);

      var td = document.createElement("TD");
      td.setAttribute('id', 'td5');
      document.getElementById("tr3").appendChild(td);

      var span3 = document.createElement("SPAN");
      span3.innerHTML = "HAMBRE"; 
      document.getElementById("td5").appendChild(span3);

    var td = document.createElement("TD");
      td.setAttribute('id', 'td6');
      document.getElementById("tr3").appendChild(td);

      var hambre = document.createElement("INPUT")
      hambre.innerHTML = "1";
      hambre.setAttribute('type', 'number');
      hambre.setAttribute('value', '0');
      hambre.setAttribute('min', '0');
      hambre.setAttribute('max', '5');
      hambre.setAttribute('id', 'hambre');
      document.getElementById("td6").appendChild(hambre);

  var tr = document.createElement("TR");
    tr.setAttribute('id', 'tr4');
    document.getElementById("main").appendChild(tr);

    var td = document.createElement("TD");
      td.setAttribute('id', 'td7');
      document.getElementById("tr4").appendChild(td);

      var span4 = document.createElement("SPAN");
      span4.innerHTML = "RESERVA"; 
      document.getElementById("td7").appendChild(span4);

    var td = document.createElement("TD");
      td.setAttribute('id', 'td8');
      document.getElementById("tr4").appendChild(td);

      var reserva = document.createElement("INPUT")
      reserva.innerHTML = '1';
      reserva.setAttribute('type', 'number');
      reserva.setAttribute('value', '1');
      reserva.setAttribute('min', '1');
      reserva.setAttribute('max', '30');
      reserva.setAttribute('id', 'reserva');
      document.getElementById("td8").appendChild(reserva);

  var div = document.createElement("DIV");
    div.setAttribute('id', 'dado1');
    document.getElementById("main").appendChild(div); 

    var btnLanzar = document.createElement("BUTTON");
    btnLanzar.innerHTML = "REALIZAR ACCIÓN";
    btnLanzar.setAttribute('id', 'btnLanzar');
    btnLanzar.setAttribute('type', 'button');
    btnLanzar.setAttribute('onclick', 'calcResultado()');
    document.getElementById("dado1").appendChild(btnLanzar);

  var div = document.createElement("DIV");
    div.setAttribute('id', 'tr6');
    document.body.appendChild(div);

      var resultados = document.createElement("H3");
    resultados.setAttribute('id', 'exitos');
    document.getElementById("tr6").appendChild(resultados);

    var resultados = document.createElement("H3");
    resultados.setAttribute('id', 'resultadoDestacado');
    document.getElementById("tr6").appendChild(resultados);

    var resultados = document.createElement("P");
    resultados.setAttribute('id', 'resultadosDadosHambre');
    resultados.setAttribute('class', 'rojo');
    document.getElementById("tr6").appendChild(resultados);

    var resultados = document.createElement("P");
    resultados.setAttribute('id', 'resultadosDadosNormal');
    document.getElementById("tr6").appendChild(resultados);

    var div = document.createElement("DIV");
    div.setAttribute('id', 'unDado');
    document.body.appendChild(div);

      var table2 = document.createElement("TABLE");
      table2.setAttribute('id', 'unD');
      document.getElementById("unDado").appendChild(table2);

      var trU = document.createElement("TR");
      trU.setAttribute('id', 'trU');
      document.getElementById("unD").appendChild(trU);

        var tdU = document.createElement("TD");
        tdU.setAttribute('id', 'tdU');
        document.getElementById("trU").appendChild(tdU);
        
        var span5 = document.createElement("SPAN");
        span5.innerHTML = "ACTIVAR PODER DE LA SANGRE"; 
        document.getElementById("tdU").appendChild(span5);

    var div = document.createElement("DIV");
      div.setAttribute('id', 'dado2');
      document.getElementById("unD").appendChild(div);      

        var enardecimiento = document.createElement("BUTTON");
      enardecimiento.innerHTML = "USAR DON";
      enardecimiento.setAttribute('id', 'enardecimiento');
      enardecimiento.setAttribute('type', 'button');
      enardecimiento.setAttribute('onclick', 'tirarUnDado()');
      document.getElementById("dado2").appendChild(enardecimiento); 

    var resultadoUnDado = document.createElement("H3");
    resultadoUnDado.setAttribute('id', 'resultadoUnDado');
    document.getElementById("unDado").appendChild(resultadoUnDado);

    var div = document.createElement("DIV");
      div.setAttribute('id', 'datosFicha');
      document.body.appendChild(div);
}

function tirarUnDado(){
  let resultadoUnDado = ( Math.floor(Math.random() * 10)+1 );
  resultadoUnDado < 6 ? mensaje = ' Tu hambre aumenta!' : mensaje = " Tu hambre se mantiene..." 
  let resultado = 'Don de la sangre: ' + resultadoUnDado + mensaje;

  socket.emit('chatMessage', resultado);
}

calcResultado=()=> {
  let vidaActual = document.getElementById("vida").checked;
  let compulsionClan = document.getElementById("compulsion").checked;
  let hambreActual = document.getElementById("hambre").value;
  let reservaDados = document.getElementById("reserva").value;
  let penalizacionDañoAgravado = 0;
  let penalizacionCompulsionClan = 0;

  //no puede haber una reserva mayor a 30 o menor a 1
  if(reservaDados > 29){ reservaDados = 30; }
  if(reservaDados < 1){ reservaDados = 1; }

    //no puede haber una reserva mayor a 5 o menor a 0
  if(hambreActual > 5){ hambreActual = 5; }
  if(hambreActual < 0){ hambreActual = 0; }

  //penalizadores activos
  if(vidaActual === true){
    penalizacionDañoAgravado = -2;
  }
  if(compulsionClan === true){
    penalizacionCompulsionClan = -2;
  }
    
  let reservaTotalDados = 
    + parseInt(reservaDados)
    + penalizacionDañoAgravado
    + penalizacionCompulsionClan;

  console.log(`Total reserva dados =>`, 
    reservaDados,
    '+', penalizacionDañoAgravado,
    '+', penalizacionCompulsionClan, 
    '=', reservaTotalDados)

  //la reserva total de dados no puede ser inferior a '1'
  if(reservaTotalDados <= 0){
    reservaTotalDados = 1;
  }

  //si el hambre es mayor a la reserva total de dados, el hambre es igual a a reserva total
  if(hambreActual >= reservaTotalDados){
    hambreActual = reservaTotalDados;
  }

  //array resultados reserva dados hambre
  let dadosHambre = hambreActual;
  var arrayTiradaHambre = [];
  for(var i = 0; i < dadosHambre; i ++){
    arrayTiradaHambre.push( ( Math.floor(Math.random() * 10)+1 ) );
  }
  //ordenamos de menor a mayor los resultados de la array de dados de hambre
  arrayTiradaHambre.sort((b,a)=>b-a);

  document.getElementById('resultadosDadosHambre').innerHTML = 'Dados hambre: ' + arrayTiradaHambre;
  console.log('Dados hambre', arrayTiradaHambre);

  //array resultados reserva dados normal
  let dadosNormal = reservaTotalDados - hambreActual
  var arrayTiradaNormal = [];
  for(var i = 0; i < dadosNormal; i ++){
    arrayTiradaNormal.push( ( Math.floor(Math.random() * 10)+1 ) );
  }
  //ordenamos de menor a mayor los resultados de la array de dados normales
  arrayTiradaNormal.sort((b,a)=>b-a);

  document.getElementById('resultadosDadosNormal').innerHTML = 'Dados normales: ' + arrayTiradaNormal;
  console.log('Dados normal', arrayTiradaNormal);

  //suma éxitos y cŕiticos tirada
  let sumExitos = 0;
  let sumCritico = 0;
  let pifiaSangrienta = false;
  let criticoSangriento = false;
  let criticoNormal = false;
  let obtenerUnExitoNormal = false;
  arrayTiradaHambre.forEach(function(item){
    if(item === 1){
      pifiaSangrienta = true;
      console.log('-> Pifia sangrienta! **1** (Obtienes compulsión)');
    }
    if(item > 5 && item < 10){
      sumExitos++;
      console.log('-> Éxito sangriento')
    }
    if(item === 10){
      sumExitos++;
      sumCritico++;
      criticoSangriento = true;
      console.log('-> posible cŕitico! tenemos un **10** en sangriento')
    }
  });
  arrayTiradaNormal.forEach(function(item){
    if(item > 5 && item < 10){
      sumExitos++;
      obtenerUnExitoNormal = true;
      console.log('-> Éxito normal')
    }
    if(item === 10){
      sumExitos++;
      sumCritico++;
      criticoNormal = true;
      obtenerUnExitoNormal = true;
      console.log('-> posible cŕitico! tenemos un **10**')
    }
  });

  //hemos llegado a cŕitico? tenemos que alcanzar 2 criticos como mínimo, o 4, o 6, etc
  let tenemosCritico = false;
  if(sumCritico >= 2){
    tenemosCritico  = true;
    sumExitos++;
    sumExitos++;
  }
  if(sumCritico === 4){
    sumExitos++;
    sumExitos++;
  }
  if(sumCritico === 6){
    sumExitos++;
    sumExitos++;
  }
  if(sumCritico === 8){
    sumExitos++;
    sumExitos++;
  }

  //resultados descatados
  if(pifiaSangrienta === true && obtenerUnExitoNormal === false){
    document.getElementById('resultadoDestacado').innerHTML = ' Pifia bestial!! (Obtienes compulsión)';
    document.getElementById('resultadoDestacado').style.color = 'red';
  }
  else if(pifiaSangrienta === true){
    document.getElementById('resultadoDestacado').innerHTML = ' Posible Pifia bestial! (Obtienes compulsión?)';
    document.getElementById('resultadoDestacado').style.color = 'red';
  }
  else if(criticoSangriento === true && tenemosCritico){
    document.getElementById('resultadoDestacado').innerHTML = ' Crítico sangriento!!';
    document.getElementById('resultadoDestacado').style.color = 'red';
  }
  else if(tenemosCritico === true){
    document.getElementById('resultadoDestacado').innerHTML = ' Crítico!!';
    document.getElementById('resultadoDestacado').style.color = 'black';
  }
  else{
    document.getElementById('resultadoDestacado').innerHTML = ' ';
    document.getElementById('resultadoDestacado').style.color = 'black';
  }
  //ver resultados
  document.getElementById('exitos').innerHTML = 'TOTAL ÉXITOS => ' + sumExitos;
  console.log('sumExitos',  sumExitos)

  //eliminar opacidad de los resultados (al volver a pulsar el botón)
  document.getElementById('exitos').style.opacity = '1';
  document.getElementById('resultadosDadosHambre').style.opacity = '1';
    document.getElementById('resultadosDadosNormal').style.opacity = '1';
    document.getElementById('resultadoDestacado').style.opacity = '1';

  //esconder botón  
  document.getElementById('btnLanzar').style.visibility = 'hidden';
  // mostrar el botón a los 5 secs
    setTimeout(function(){ 
      document.getElementById('btnLanzar').style.visibility = 'visible';
      //añadir transparencia a los resultados
      document.getElementById('exitos').style.opacity = '0.7';    
      document.getElementById('resultadosDadosHambre').style.opacity = '0.7';
      document.getElementById('resultadosDadosNormal').style.opacity = '0.7';
      document.getElementById('resultadoDestacado').style.opacity = '0.7';      
    }, 5000);


    let destacado = resultadoDestacado.innerHTML;
    let mensaje = 'Total éxitos: ' + sumExitos + destacado;

    socket.emit('chatMessage', mensaje);
}






