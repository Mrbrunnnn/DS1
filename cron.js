"use strict" //para inibir possiveis erros

var hh = 0;  // as variaveis vem zerada
var mm = 0;
var ss = 0;

var tempo = 1000; //Strat por 1000
var cron;

//Inicia o temporizador do cronometro
function start() {
    cron = setInterval(() => { timer(); }, tempo);
}

//Para o temporizador mas não limpa as variáveis aui ele so para 
function pause() {
    clearInterval(cron);
}

        //limpa as variaveis 
        //Para o temporizador e limpa as variáveis
                
                function stop() {
                    
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

        // start do contador... manda para texto...

    document.getElementById('counter').innerText = '00:00:00';
}

//Faz a contagem do tempo e exibição 
            
            function timer() {
                 
                 ss++; //Incrementa +1 na variável ss

                         if (ss == 59) { //Verifica se deu 59 segundos
                      ss = 0; //Volta os segundos para 0
                 mm++; //Adiciona +1 na variável mm

                        if (mm == 59) { //Verifica se deu 59 minutos
                    mm = 0;//Volta os minutos para 0
                 hh++;//Adiciona +1 na variável hora
        }
    }

    //Cria uma variável com o valor tratado HH:MM:SS
                
                 var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
    
         //Insere o valor tratado no elemento counter
                    
                    document.getElementById('counter').innerText = format;

    //Retorna o valor tratado
    return format;
}