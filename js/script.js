/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FIRST ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a1() {
	var listData = document.getElementById("listData").value;
	var list = document.createElement("LI"); 
	var data = document.createTextNode(listData);
	list.appendChild(data);
	document.getElementById("sol1").appendChild(list);
	document.getElementById("listData").value = "";
}

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* SECOND ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function add() {
	var valA = parseInt(document.getElementById("valA").value);
	var valB = parseInt(document.getElementById("valB").value);
	document.getElementById("valC").value = valA + valB;
}

function sub() {
	var valA = parseInt(document.getElementById("valA").value);
	var valB = parseInt(document.getElementById("valB").value);
	document.getElementById("valC").value = valA - valB;
}

function mul() {
	var valA = parseInt(document.getElementById("valA").value);
	var valB = parseInt(document.getElementById("valB").value);
	document.getElementById("valC").value = valA * valB;
}

function div() {
	var valA = parseInt(document.getElementById("valA").value);
	var valB = parseInt(document.getElementById("valB").value);
	document.getElementById("valC").value = valA / valB;
}

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* THIRD ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a3() {
	var initial;
	var valD =document.getElementById("valD").value; //Employee number
    var valE =document.getElementById("valE").value; //Employee name

    var valF = document.querySelector('input[name = "gender"]:checked').value; //Gender
	if (document.getElementById("male").checked) {
		initial = "Mr.";
	}
	else if (document.getElementById("male").checked) {
		initial ="Ms.";
	}

	var valG =document.getElementById("valG").value;  //Department

	checkVehicle(); // Vehicle  
	var valH =parseInt(document.getElementById("valH").value); // basic salary
	var valI =parseInt(document.getElementById("valI").value); // DA
	var valJ =parseInt(document.getElementById("valJ").value); // HRA
	var valK =parseInt(document.getElementById("valK").value); // PF
 	
	var DA = ((valH * valI) / 100).toFixed(2);
	var HRA =((valH * valJ) / 100).toFixed(2);
	var PF = ((valH * valK) / 100).toFixed(2);

	var netSalary = (Number(valH) + Number(DA) + Number(HRA) + Number(PA) - Number(PF)).toFixed(2);

	document.getElementById("sol3").innerHTML = "Employee No: "+valD+"</br>"+
												"Employee Name: "+initial+" "+valE+"</br>"+
												"Department: "+valG+"</br>"+
												"Owns Vehicle: "+ownsVehicle+"</br>"+
												"Basic: "+valH+"</br>"+
												"DA@"+valI+"%: "+DA+"</br>"+
												"HRA@"+valJ+"%: "+HRA+"</br>"+
												"PF@"+valK+"%: "+PF+"</br>"+
												"PA: "+PA+"</br>"+
												"Net Salary: "+netSalary+"</br>";
	document.getElementById("res-box").style.display = "block";
}

var x = false, PA, ownsVehicle;
function checkVehicle() {
	x = document.getElementById("own").checked;	    
	if(x) {
	    ownsVehicle = "Yes";
	    PA = 100;
	}
	else{
	    ownsVehicle = "No";
	    PA = 0;
	}
}

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FOURTH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function a4() {
	var name = document.getElementById("valL").value;
	var mark1 = parseInt(document.getElementById("valM").value);
	var mark2 = parseInt(document.getElementById("valN").value);
	var mark3 = parseInt(document.getElementById("valO").value);
	var total = document.getElementById("valP");
	total.value = (mark1 + mark2 + mark3);
	var per =document.getElementById("valQ");
	per.value = ((total.value/300) * 100);

	if(mark1 < 40 || mark2 < 40 || mark3 < 40) {
		document.getElementById("sol4a").innerHTML= "Fail";
		document.getElementById("sol4b").innerHTML= "F";
	}else if(per.value >= 80) {
		document.getElementById("sol4a").innerHTML= "Pass";
		document.getElementById("sol4b").innerHTML= "A+";
	}else if(per.value >= 70 && per.value <= 79) {
		document.getElementById("sol4a").innerHTML= "Pass";
		document.getElementById("sol4b").innerHTML= "A";
	}else if(per.value >= 60 && per.value <= 69) {
		document.getElementById("sol4a").innerHTML= "Pass";
		document.getElementById("sol4b").innerHTML= "B";
	}else {
		document.getElementById("sol4a").innerHTML= "Pass";
		document.getElementById("sol4b").innerHTML= "C";
	}
}


/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* FIFTH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */

function left() {
	document.getElementById("main-heading").style.textAlign="left";
	document.getElementById("direction").innerHTML = 'left';
}

function center() {
	document.getElementById("main-heading").style.textAlign="center";
	document.getElementById("direction").innerHTML = 'center';
}

function right() {
	document.getElementById("main-heading").style.textAlign="right";
	document.getElementById("direction").innerHTML = 'right';
}

function red() {
	document.getElementById("main-heading").style.color = "red";
}

function green() {
	document.getElementById("main-heading").style.color = "green";
}

function blue() {
	document.getElementById("main-heading").style.color = "blue";
}

function checkbox() {
	if(document.getElementById("c1").checked) {
		document.getElementById("main-heading").style.fontWeight="bold";
	}
	else{
		document.getElementById("main-heading").style.fontWeight="normal";
	}

	if(document.getElementById("c2").checked) {
		document.getElementById("main-heading").style.fontStyle="italic";
	} 
	else{
		document.getElementById("main-heading").style.fontStyle="normal";
	}
}

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* SIXTH ASSIGNMENT SECTION */
/* ---------------------------------------------------------------------------------------------------------------------------------------------------------- */
var box = document.getElementById("para-text"); 
var id1, id2, pos1 = 0, pos2 = 0;

function start1() {
	clearInterval(id2);
	id1 = setInterval(frame1, 10);
}

function frame1() {
    if (pos1 == 250) {
    	clearInterval(id1);
    }
    else {
        pos1++;
        box.style.top = pos1 + 'px';
    }
}

function horizontal1(){
	clearInterval(id1);
	id2 = setInterval(frame2, 10);
}

function frame2() {
	if(pos2 == 800) {
		clearInterval(id2);
	} else{
	pos2++;
	box.style.left = pos2 + 'px';
	}
}

function reset1() {
	box.style.top = 0;
	box.style.left = 0;
}

function stop1() {
    clearInterval(id1);
    clearInterval(id2);
}
