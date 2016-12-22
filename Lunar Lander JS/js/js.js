var y = 5;
var v = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer = null;
var timerFuel = null;
var fuel = 100;
var activo = true;

window.onload = function() {

    document.onkeydown = motorOn;
    document.onkeyup = motorOff;

    start();
}

function start() {
    timer = setInterval(function() {
        moverNave();
    }, dt * 1000);
}

function stop() {
    clearInterval(timer);
    if (y >= 70) {
        document.getElementById("imgNave").src = "img/explosion.gif";
    }
}

function moverNave() {
    v += a * dt;
    document.getElementById("velocidad").innerHTML = Math.round(v);
    y += v * dt;
    document.getElementById("altura").innerHTML = Math.round(70 - y);

    if (y < 70) {
        document.getElementById("nave").style.top = y + "%";

    } else {
        activo = false;
        stop();
        motorOff();
        document.getElementById("imgNave").src = "img/nave.png";


        if (v > 5) {
            document.getElementById("imgNave").src = "img/explosion.gif";
            document.getElementById("gameover").style.display = "block";
        }
    }
}

function motorOn() {
    if (activo == true) {
        a = -g;
        if (timerFuel == null) {
            timerFuel = setInterval(function() {
                actualizarAltura();
            }, 100);
            document.getElementById("imgNave").src = "img/nave-fuego.png";
        }

        if (fuel <= 0) {
            motorOff();
            document.getElementById("fuel").innerHTML = 0;
            document.getElementById("imgNave").src = "img/nave.png";
        }
        if (y > 70) {
            motorOff();
            document.getElementById("fuel").innerHTML = 0;
            if (v > 5) {
                document.getElementById("imgNave").src = "img/explosion.gif";
            }
        }
    }
}

function motorOff() {
    if (activo == true) {
        a = g;
        document.getElementById("imgNave").src = "img/nave.png";
        clearInterval(timerFuel);
        timerFuel = null;
    }
}

function actualizarAltura() {
    if (activo == true) {
        fuel -= 1;
        document.getElementById("fuel").innerHTML = fuel + "%";
    }
}

function eventosOff() {
    document.getElementById("izquierda").style.pointerEvents = 'none';
    document.getElementById("derecha").style.pointerEvents = 'none';
}

function eventosOn() {
    document.getElementById("izquierda").style.pointerEvents = 'auto';
    document.getElementById("derecha").style.pointerEvents = 'auto';
}

function reanudar() {
    activo = true
    start();
    document.getElementById("reanudar").style.display = "none";
    document.getElementById("pausa").style.display = "inline-block";
    document.getElementById("menuInstrucciones").style.display = "none";
}

function pausar() {
    motorOff();
    activo = false;
    stop();
    document.getElementById("pausa").style.display = "none";
    document.getElementById("reanudar").style.display = "inline-block";
    document.getElementById("menuInstrucciones").style.display = "inline-block";
}

function reiniciarJuego() {
    location.reload(true);
}

function mostrarInstrucciones() {
    pausar();
    eventosOff();
    document.getElementById("menuInstrucciones").style.display = "block";
}

function ocultarInstrucciones() {
    document.getElementById("menuInstrucciones").style.display = "none";
    eventosOn();
}
