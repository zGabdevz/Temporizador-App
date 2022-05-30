        var verif = false;
        var btnbegin = document.getElementById("start");
        var form = document.getElementById("form");
        var view = document.getElementById("clock");

        function desligar()
        {
            if(verif==false)
            {
                verif=true;
            }else{
                alert("Cancelado!");
                btnbegin.disabled = false;  
                view.style="color:#B0C4DE;";
            }
        }

        //Funcão ajusta numeros que sejam menores,
        //que 10, e adiciona 0 a frente do número.
        function adjust(hour,min,sec){

            //Se o tempo estiver ser menor
            //que 10, é adicionado um zero
            //na frente do número
            if(hour<10){
                h="0"+hour;
            }else{
                h = hour;
            }

            if(min<10){
                m = "0"+min;
            }else{
                m = min;
            }  
            
            if(sec<10){
                s = "0"+sec;
            }else{
                s = sec;
            }

            //Corrige mantendo 2 zeros
            //quando o tempo zerar
            if(sec == 0){
              s = "00";
            }
            if(min == 0){
              m = "00";
            } 
            if(h == 0){
              h = "00";
            } 
            
        }

        //Funcao timer é a principal desse programa,
        //onde é processado todo o motor do temporizador
        function timer(hour, min, sec)
        {  
            
            //Tudo acontence dentro de UM segundo,
            //e é chamada a função novamente,
            //até que todos os valores do tempo 
            //atinjam o zero.
            setTimeout(function(){
                
                if(hour>-1)
                {    
                    //É chamado a essa funcao para retornar
                    //os valores do tempo corrigido, quando
                    //o tempo se tornar menor que 10.
                    adjust(hour,min,sec);   

                    //os valores retornados da funcao adjust são concatenados 
                    time = h + ':' + m + ':' + s;
                    //E passados para a página html.
                    view.innerHTML = time;


                //Mecanica do relogio

                    //Em seguida o tempo segundo é descontado imediatamente,
                    //para proseguir a contagem regressiva
                    sec--;

                    //Se segundo atingir zero, é
                    //voltada a contagem para 59 segundos
                    //então é diminuido os minutos
                    if(sec < 0)
                    {
                      sec = 59;
                      min--;
                    }

                    //A mesma coisa acontece aqui
                    //porém com minutos e horas
                    if(min < 0)
                    {
                      min = 59;
                      hour--;
                      verifthree = false;
                    }


                    //Quando todos chegarem ao zero,
                    //é finalizado a contagem.
                    if(hour == 0 && min == 0 && sec == 0)
                    {
                        setTimeout(function(){
                             verif=false;
                             btnbegin.disabled = false;
                             btnbegin.style="background-color:#00FA9A;";
                             view.style="color:#B0C4DE;";
                             alert("TEMPO ACABOU!"); 
                        },2000)
                    }
                    
                    //Se for apertado o botao desligar,
                    //é chamada esta função.
                    if(verif==true)
                    {
                        desligar();
                    } else{
                        //caso não, o programa continua a contagem,
                        //chamando novamente a funcao com os valores,
                        //descontados.
                        timer(hour, min, sec);

                        // veriftwo = true;
                        // verifthree = true;
                    }
                }

            },1000)

        }

        //Captura os valores de tempo, e
        //desativa o botão "Iniciar"
        function getData(){
            btnbegin.disabled = true;
            btnbegin.style="background:#836FFF;";
            view.style="color:#836FFF;";

            let h = document.getElementById("hour").value;
            let m = document.getElementById("minute").value;
            let s = document.getElementById("second").value;

            timer(h, m, s);
        }
