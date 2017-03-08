//Después de cargar la página (onload) se definen los eventos sobre los elementos entre otras acciones.
window.onload = function() {

	// Boton corregir del examen
	document.getElementById("exam").onsubmit=function(){
   inicializar();
   if (comprobar()){
    corregirNumber();
    corregirSelect();
    corregirCheckbox();
		corregirSelectMultiple();
		corregirRadio();
    presentarNota();
   }
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


// Recuperamos los datos del fichero XML xml/questions.xml
// xmlDOC es el documento leido XML.
function gestionarXml(dadesXml) {
    var xmlDoc = dadesXml.responseXML; //Parse XML to xmlDoc


    //Enunciado preguntas input
    var tituloInput1 = xmlDoc.getElementsByTagName("title")[0].innerHTML;
    ponerDatosInputHtml(tituloInput1, 1);


    var tituloInput2 = xmlDoc.getElementsByTagName("title")[1].innerHTML;
    ponerDatosInputHtml(tituloInput2, 2);


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
    var checkboxContainer = document.getElementById('checkboxDiv' + pos);
    document.getElementById('checkbox' + pos).innerHTML = t;
    for (i = 0; i < opt.length; i++) {
        var input = document.createElement("input");
        var label = document.createElement("label");
        label.innerHTML = opt[i];
        label.setAttribute("for", "checkbox" + i);
        input.type = "checkbox";
        input.name = "checkbox"+ pos;
        input.id = "checkbox";
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
