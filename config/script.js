
        let verif = false;
        let count = 0;
        let btnbegin = document.getElementById("start");
        var view = document.getElementById("clock");

        function desligar()
        {
            if(verif==false)
            {
                verif=true;
            }else{
                alert("Cancelado!")
                btnbegin.disabled = false;
            }
        }

        function timer(hour, min, sec)
        {  
                
            setTimeout(function(){
                
                if(hour>-1)
                {  

                        time = hour+":"+min+":"+sec;
                        view.innerHTML = time;
                        sec--;

                        if(sec < 0)
                        {
                            sec = 59;
                            min--;
                        }

                        if(min < 0)
                        {
                            min = 59;
                            hour--;
                        }

                        if(hour == 0 && min == 0 && sec == 0)
                        {
                            alert("TEMPO ACABOU!"); 
                            btnbegin.disabled = false;
                            verif=false;
                        }
                        if(verif==true)
                        {
                            desligar();
                        } else{
                            timer(hour, min, sec);
                        }
                }

            },1000)

        }

        function getData()
        {

            btnbegin.disabled = true;
            verif=false;

            let h = document.getElementById("hour").value;
            let m = document.getElementById("minute").value;
            let s = document.getElementById("second").value;

            timer(h, m, s)
        }