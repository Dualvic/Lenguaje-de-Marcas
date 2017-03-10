var formElement = null;
var respuestaTexto1 = null;
var respuestaTexto2 = null;
var respuestaSelect1 = 0;
var respuestaSelect2 = 1;
var respuestaRadio1 = 0;
var respuestaRadio2 = 1;
var respuestaCheckbox1 = [];
var respuestaCheckbox2 = [];
var respuestaMultiple1 = [];
var respuestaMultiple2 = [];
var nota = 0.0;
var xmlDoc = null;

//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function() {
    formElement = document.getElementById('exam');
    formElement.onsubmit = function() {
      mostrarResultados();
      corregirTexto1();
      corregirCheckbox1();
      corregirRadio1();
      corregirSelect1();
      corregirCheckbox2();
      corregirMultiple1();
      corregirTexto2();
      corregirSelect2();
      corregirRadio2();
      corregirMultiple2();
      presentarNota();
      return false;
    }

    // LEER XML de xml/questions.xml
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            gestionarXml(this);
        }
    };
    xhttp.open("GET", "xml/preguntas.xml", true);
    xhttp.send();
}

// interaccion instrucciones

function mostrarInstrucciones() {
   document.getElementById("instrucciones").style.display = "block";
}

function ocultarInstrucciones() {
   document.getElementById("instrucciones").style.display = "none";
}

// mostrar Resultados
function mostrarResultados() {
   document.getElementById("exam").style.display = "none";
   document.getElementById("resultadosDiv").style.display = "block";
}



// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML.
function gestionarXml(dadesXml) {
    xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc


    //Enunciado preguntas input
    var tituloInput1 = xmlDoc.getElementsByTagName("title")[0].innerHTML;
    ponerDatosInputHtml(tituloInput1, 1);
    respuestaTexto1 = "asno";


    var tituloInput2 = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    ponerDatosInputHtml(tituloInput2, 2);
        respuestaTexto2 = "coche";


    // Enunciado preguntas select
    var tituloSelect1 = xmlDoc.getElementsByTagName("title")[8].innerHTML;
    var opcionesSelect1 = [];
    var noptselect = xmlDoc.getElementById("jaap009").getElementsByTagName('option').length;
    for (i = 0; i < noptselect; i++) {
        opcionesSelect1[i] = xmlDoc.getElementById("jaap009").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelectHtml(tituloSelect1, 1, opcionesSelect1);


    var tituloSelect2 = xmlDoc.getElementsByTagName("title")[9].innerHTML;
    var opcionesSelect2 = [];
    var noptselect2 = xmlDoc.getElementById("jaap010").getElementsByTagName('option').length;
    for (i = 0; i < noptselect2; i++) {
        opcionesSelect2[i] = xmlDoc.getElementById("jaap010").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosSelectHtml(tituloSelect2, 2, opcionesSelect2);


    // Enunciado preguntas Select Multiple
    var tituloMultiple1 = xmlDoc.getElementsByTagName("title")[6].innerHTML;
    var opcionesMultiple1 = [];
    var noptmultiple = xmlDoc.getElementById("jaap007").getElementsByTagName('option').length;
    for (i = 0; i < noptmultiple; i++) {
        opcionesMultiple1[i] = xmlDoc.getElementById("jaap007").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosMultipleHtml(tituloMultiple1, 1, opcionesMultiple1);

		var tituloMultiple2 = xmlDoc.getElementsByTagName("title")[7].innerHTML;
		var opcionesMultiple2 = [];
		var noptmultiple2 = xmlDoc.getElementById("jaap008").getElementsByTagName('option').length;
		for (i = 0; i < noptmultiple2; i++) {
				opcionesMultiple2[i] = xmlDoc.getElementById("jaap008").getElementsByTagName('option')[i].innerHTML;
		}
		ponerDatosMultipleHtml(tituloMultiple2, 2, opcionesMultiple2);

    // Enunciado preguntas checkbox
    var tituloCheckbox1 = xmlDoc.getElementsByTagName("title")[4].innerHTML;
    var opcionesCheckbox1 = [];
    var noptcheck = xmlDoc.getElementById("jaap005").getElementsByTagName('option').length;
    for (i = 0; i < noptcheck; i++) {
        opcionesCheckbox1[i] = xmlDoc.getElementById("jaap005").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckboxHtml(tituloCheckbox1, 1, opcionesCheckbox1);

    var tituloCheckbox2 = xmlDoc.getElementsByTagName("title")[5].innerHTML;
    var opcionesCheckbox2 = [];
    var noptcheck2 = xmlDoc.getElementById("jaap006").getElementsByTagName('option').length;
    for (i = 0; i < noptcheck2; i++) {
        opcionesCheckbox2[i] = xmlDoc.getElementById("jaap006").getElementsByTagName('option')[i].innerHTML;
    }
    ponerDatosCheckboxHtml(tituloCheckbox2, 2, opcionesCheckbox2);

// Enunciado pregntas radio

var tituloRadio1 = xmlDoc.getElementsByTagName("title")[2].innerHTML;
var opcionesRadio1 = [];
var noptradio1 = xmlDoc.getElementById("jaap003").getElementsByTagName('option').length;
for (i = 0; i < noptradio1; i++) {
		opcionesRadio1[i] = xmlDoc.getElementById("jaap003").getElementsByTagName('option')[i].innerHTML;
}
ponerDatosRadioHtml(tituloRadio1, 1, opcionesRadio1);

var tituloRadio2 = xmlDoc.getElementsByTagName("title")[3].innerHTML;
var opcionesRadio2 = [];
var noptradio2 = xmlDoc.getElementById("jaap004").getElementsByTagName('option').length;
for (i = 0; i < noptradio2; i++) {
		opcionesRadio2[i] = xmlDoc.getElementById("jaap004").getElementsByTagName('option')[i].innerHTML;
}
ponerDatosRadioHtml(tituloRadio2, 2, opcionesRadio2);


}

// ****************************************************************************************************
// poner los datos recibios en el HTML

function ponerDatosInputHtml(t, pos) {
    document.getElementById("input" + pos).innerHTML = t;

}

function ponerDatosSelectHtml(t, pos, opt) {
    document.getElementById("select" + pos).innerHTML = t;

    var select = document.getElementById("selectOptions" + pos);

    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.text = opt[i];
        option.value = i + 1;
        select.options.add(option);
    }
}

function ponerDatosCheckboxHtml(t, pos, opt) {
    document.getElementById('checkbox' + pos).innerHTML = t;
    var checkboxContainer = document.getElementById('checkboxDiv' + pos);

    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "color_" + pos + i);
        input.type = "checkbox";
        input.name = "checkbox"+ pos;
        input.id = "color_" + pos + i;
        checkboxContainer.appendChild(input);
        checkboxContainer.appendChild(label);
        checkboxContainer.appendChild(document.createElement("br"));
    }
}


function ponerDatosMultipleHtml(t, pos, opt) {
    var selectMultiple = document.createElement("select");
    document.getElementById("multiple" + pos).innerHTML = t;
    selectMultiple.multiple = "true";
		selectMultiple.id="selectMultiple";
    for (i = 0; i < opt.length; i++) {
        var option = document.createElement("option");
        option.innerHTML = opt[i];
      selectMultiple.appendChild(option);
    }
		document.getElementById("multipleDiv" + pos).appendChild(selectMultiple);
}

function ponerDatosRadioHtml(t, pos, opt) {
	var radioContainer = document.getElementById("radioDiv" + pos);
	document.getElementById("radio" + pos).innerHTML = t;
	for (i = 0; i < opt.length; i++) {
		var input = document.createElement("input");
		var label = document.createElement("label");
		label.innerHTML = opt[i];
		label.setAttribute("for", "radio" + i)
		input.type = "radio";
		input.name = "radio" + pos;
		input.id = "radio";
		radioContainer.appendChild(input);
		radioContainer.appendChild(label);
		radioContainer.appendChild(document.createElement("br"))
	}

}


function corregirTexto1() {

    var s = document.getElementById("string1").value;
    if (s == respuestaTexto1) {
        darRespuestaHtml("P1: Exacto!");
        nota += 1;
    } else {
        darRespuestaHtml("P1: Incorrecta!");
    }
}

function corregirTexto2() {

    var s = document.getElementById("string2").value;
    if (s == respuestaTexto1) {
        darRespuestaHtml("P7: Exacto!");
        nota += 1;
    } else {
        darRespuestaHtml("P7: Incorrecta!");
    }
}

function corregirSelect1() {
    var sel = document.getElementById("selectOptions1");
    if (sel.selectedIndex - 1 == respuestaSelect1) {

        darRespuestaHtml("P4: Exacto!");
        nota += 1;
    } else darRespuestaHtml("P4: Incorrecta!");
}

function corregirSelect2() {
    var sel = document.getElementById("selectOptions2");
    if (sel.selectedIndex - 1 == respuestaSelect2) { // -1 porque hemos

        darRespuestaHtml("P8: Exacto!");
        nota += 1;
    } else darRespuestaHtml("P8: Incorrecta!");
}


function corregirCheckbox1() {
    var notaCheckbox = 0;
    var f = formElement;
    var escorrecta = [];
    for (i = 0; i < f.checkbox1.length; i++) { // "chckbx" es el nombre

        if (f.checkbox1[i].checked) {
            escorrecta[i] = false;
            for (j = 0; j < respuestaCheckbox1.length; j++) {
                if (i == respuestaCheckbox1[j]) escorrecta[i] = true;
            }

            if (escorrecta[i]) {
                nota += 1.0 / respuestaCheckbox1.length; // dividido por el

                notaCheckbox += 1.0 / respuestaCheckbox.length;
            } else {
                nota -= 1.0 / respuestaCheckbox1.length; // dividido por el

            }
        }
    }
    if (notaCheckbox != 1) {
        darRespuestaHtml("P2: " + notaCheckbox + " puntos")
    } else darRespuestaHtml("P2: " + notaCheckbox + " punto")

}

function corregirCheckbox2() {
    var notaCheckbox = 0;
    var f = formElement;
    var escorrecta = [];
    for (i = 0; i < f.checkbox2.length; i++) { // "chckbx" es el nombre

        if (f.checkbox2[i].checked) {
            escorrecta[i] = false;
            for (j = 0; j < respuestaCheckbox2.length; j++) {
                if (i == respuestaCheckbox2[j]) escorrecta[i] = true;
            }

            if (escorrecta[i]) {
                nota += 1.0 / respuestaCheckbox2.length;

                notaCheckbox += 1.0 / respuestaCheckbox2.length;
            } else {
                nota -= 1.0 / respuestaCheckbox2.length; // dividido por el

            }
        }
    }
    if (notaCheckbox != 1) {
        darRespuestaHtml("P5: " + notaCheckbox + " puntos")
    } else darRespuestaHtml("P5: " + notaCheckbox + " punto")
}


function corregirRadio1() {
    var notaRadio = 0;
    var f = formElement;
    var escorrecta = null;
    for (i = 0; i < f.radio1.length; i++) {
        if (f.radio1[i].checked) {
            escorrecta = false;
            if (i == respuestaRadio1) escorrecta = true;

            if (escorrecta) {
                notaRadio += 1.0;
                nota += 1.0;
            }
        }
    }
    if (notaRadio != 1) {
        darRespuestaHtml("P3: " + notaRadio + " puntos")
    } else darRespuestaHtml("P3: " + notaRadio + " punto")
}


function corregirRadio2() {
    var notaRadio = 0;
    var f = formElement;
    var escorrecta = null;
    for (i = 0; i < f.radio2.length; i++) { // "rd" es el nombre

        if (f.radio2[i].checked) {
            escorrecta = false;
            if (i == respuestaRadio2) escorrecta = true;

            if (escorrecta) {
                notaRadio += 1.0;
                nota += 1.0;
            }
        }
    }
    if (notaRadio != 1) {
        darRespuestaHtml("P9: " + notaRadio + " puntos")
    } else darRespuestaHtml("P9: " + notaRadio + " punto")
}


function corregirMultiple1() {
    var f = formElement;
    var escorrecta = [];
    var multiple = document.getElementById("multipleDiv1");
    var puntuacion = 0;
    for (var i = 0; i < multiple.getElementsByTagName("option").length; i++) {
        if (multiple.getElementsByTagName("option")[i].selected) {
            for (var j = 0; j < respuestaMultiple1.length; j++) {
                if (multiple.getElementsByTagName("option")[i].value == respuestaMultiple1[j]) {
                    escorrecta.push(multiple.getElementsByTagName("option")[i].value);
                }
            }
        }
    }
    if (escorrecta.length > 0) {
        puntuacion = escorrecta.length / respuestaMultiple1.length;
        nota += puntuacion;
    }
    if (puntuacion != 1 & puntuacion != 0) {
        darRespuestaHtml("P6: " + puntuacion.toFixed(1) + " puntos")
    } else if (puntuacion == 0) {
        darRespuestaHtml("P6: 0 puntos");
    } else darRespuestaHtml("P6: 1 punto")
}

function corregirMultiple2() {
    var f = formElement;
    var escorrecta = [];
    var multiple = document.getElementById("multipleDiv2");
    var puntuacion = 0;
    for (var i = 0; i < multiple.getElementsByTagName("option").length; i++) {
        if (multiple.getElementsByTagName("option")[i].selected) {
            for (var j = 0; j < respuestaMultiple1.length; j++) {
                if (multiple.getElementsByTagName("option")[i].value == respuestaMultiple1[j]) {
                    escorrecta.push(multiple.getElementsByTagName("option")[i].value);
                }
            }
        }
    }
    if (escorrecta.length > 0) {
        puntuacion = escorrecta.length / respuestaMultiple1.length;
        nota += puntuacion;
    }
    if (puntuacion != 1 & puntuacion != 0) {
        darRespuestaHtml("P10: " + puntuacion.toFixed(1) + " puntos")
    } else if (puntuacion == 0) {
        darRespuestaHtml("P10: 0 puntos");
    } else darRespuestaHtml("P10: 1 punto")
}




function darRespuestaHtml(r) {
    var p = document.createElement("p");
    var node = document.createTextNode(r);
    p.appendChild(node);
    document.getElementById('resultadosDiv').appendChild(p);
}

function presentarNota() {
    darRespuestaHtml("Nota: " + nota + " puntos sobre 10");
}
