setInterval(() => {
                let horas = document.getElementById("horas");
                let minutos = document.getElementById("minutos");
                let segundos = document.getElementById("segundos");
                let ampm = document.getElementById("ampm");
  
                let hh = document.getElementById("hh");
                let mm = document.getElementById("mm");
                let ss = document.getElementById("ss");
  
                let ponto_h = document.querySelector(".ponto_h");
                let ponto_m = document.querySelector(".ponto_m");
                let ponto_s = document.querySelector(".ponto_s");

                let h = new Date().getHours();
                let m = new Date().getMinutes();
                let s = new Date().getSeconds();
                let am = h >=12 ? "PM" : "AM";

  
                if (h > 12) {
                    h = h - 12;
                }

                h = (h < 10) ? "0" + h : h;
                m = (m < 10) ? "0" + m : m;
                s = (s < 10) ? "0" + s : s;

                horas.innerHTML = h + "<br><span>Horas</span>";
                minutos.innerHTML = m + "<br><span>Minutos</span>";
                segundos.innerHTML = s + "<br><span>Segundos</span>";
                ampm.innerHTML = am;
  
                hh.style.strokeDashoffset = 440 - (440 * h) / 12; 
                mm.style.strokeDashoffset = 440 - (440 * m) / 60; 
                ss.style.strokeDashoffset = 440 - (440 * s) / 60; 
  
                ponto_h.style.transform = `rotate(${h * 30}deg)`;
                ponto_m.style.transform = `rotate(${m * 6}deg)`;
                ponto_s.style.transform = `rotate(${s * 6}deg)`;

            })

 setInterval(() => {
                d = new Date(); 
                hr = d.getHours();
                min = d.getMinutes();
                sec = d.getSeconds();
                hr_rotation = 30 *  + min + sec/2; 
                min_rotation = 6 * min;
                sec_rotation = 6 * sec;
  
                hour.style.transform = `rotate(${hr_rotation}deg)`;
                minute.style.transform = `rotate(${min_rotation}deg)`;
                second.style.transform = `rotate(${sec_rotation}deg)`;
            }, 1000);