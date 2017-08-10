var express = require('express');

var app = express();

app.get('/', function(req, res){
  res.send("<html><body>Pagina Inicial</body></html>");
});

app.get('/tecnologia', function(req, res){
  res.send("<html><body>Pagina de Tecnologia</body></html>");
});

app.get('/musica', function(req, res){
  res.send("<html><body>Pagina de Musica</body></html>");
});


app.get('/tabuada', function(req, res){

var mensagem = '<center><h2>Tabuadas</h2>';
  for (var a = 1; a < 11; a++){
    mensagem += '<hr>Tabuada do' + a + '<br>';
    for(var b = 1; b <11; b++){
      var saida = a + 'x' + b + '=' + (a*b) + '<br>';
      mensagem += saida;
    }
  }

mensagem += '<hr>';
mensagem += '</center>';

  res.send(mensagem);
});



app.listen(3000, function(){
    console.log('Servidor Ativo, rodando com Express!');
});
