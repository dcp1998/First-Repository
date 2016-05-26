function color(el,clr){
	var elem=document.getElementById("test");
	elem.style.transition="background 2.0s linear 0s";
	elem.style.background=clr;
}

var boxarray=["box1","box2","box3"];
window.addEventListener("mouseup",function(event){
	for(var i=0;i<boxarray.length;i++){
		var box=document.getElementById(boxarray[i]);
		if(event.target != box && event.target.parentNode != box){
			box.style.display="none";
		}
	}
});

function toggleClass(el){
	if(el.className=="class1"){
		el.className="class2";
	}
	else{
		el.className="class1";
	}
}

function toggleClass2(el){
	var kids=document.getElementById('menu1').children;
	for (var i=0;i<kids.length;i++){
		kids[i].className="class3";
	}
	el.className="class4";
}

function toggleNavPanel(x){
	var panel = document.getElementById(x), navarrow = document.getElementById("navarrow"), maxH="300px";
	if(panel.style.height == maxH){
		panel.style.height = "0px";
		navarrow.innerHTML = "&#9662;";
	}
	else{
		panel.style.height = maxH;
		navarrow.innerHTML = "&#9652;";
	}
}

function playDiceGame(){
	var dice1 = document.getElementById("dice1");
	var dice2 = document.getElementById("dice2");
	var d1 = Math.floor(Math.random() * 6 + 1);
	var d2 = Math.floor(Math.random() * 6 + 1);
	var result = document.getElementById("diceTotal");
	var total = d1 + d2;
	dice1.innerHTML = d1;
	dice2.innerHTML = d2;
	diceTotal.innerHTML = "You rolled a " + total + ".";
	if(d1 == d2){
		diceTotal.innerHTML = "You rolled a " + total + ". " + "Doubles, you get a free turn!!";
	}
}

var memory_array = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L'];
var memory_values = [];
var memory_tile_ids = [];
var tiles_flipped = 0;
Array.prototype.memory_tile_shuffle = function(){
	var i = this.length, j, temp;
	while(--i > 0){
		j = Math.floor(Math.random() * (i + 1));
		temp = this [j];
		this [j] = this [i];
		this [i] = temp;
	}
};
function newBoard(){
	tiles_flipped = 0;
	var output = '';
	memory_array.memory_tile_shuffle();
	for(var i = 0; i < memory_array.length; i++){
		output += '<div id = "tile_'+i+'" onclick="memoryFlipTile(this,\''+memory_array[i]+'\')"></div>';
	}
	document.getElementById("memory_board").innerHTML = output;
}

function memoryFlipTile(tile,val){
	if(tile.innerHTML == "" && memory_values.length < 2){
		tile.style.background = '#FFF';
		tile.innerHTML = val;
		if(memory_values.length == 0){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
		}
		else if (memory_values.length == 1){
			memory_values.push(val);
			memory_tile_ids.push(tile.id);
			if(memory_values [0] == memory_values [1]){
				tiles_flipped += 2;
				memory_values = [];
				memory_tile_ids = [];
				if(tiles_flipped == memory_array.length){
					alert("Board cleared... Generating new board");
					document.getElementById('memory_board').innerHTML = "";
					newBoard();
				}
			}
			else{
				function flip2Back(){
					var tile_1 = document.getElementById(memory_tile_ids [0]);
					var tile_2 = document.getElementById(memory_tile_ids [1]);
					tile_1.style.background = 'rgba(76, 223, 105, 0.79)';
					tile_1.innerHTML = "";
					tile_2.style.background = 'rgba(76, 223, 105, 0.79)';
					tile_2.innerHTML = "";
					memory_values = [];
					memory_tile_ids = [];
				}
				setTimeout(flip2Back,700);
			}
		}
	}
}

function customAlert(dialog){
	this.render = function(){
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		var dialogoverlay = document.getElementById("dialogoverlay");
		var dialogbox = document.getElementById("dialogbox");
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH + "px";
		dialogbox.style.left = (winW/2) - (550 * 0.5) + "px";
		dialogbox.style.top = "100px";
		dialogbox.style.display = "block";
		document.getElementById("dialogboxhead").innerHTML = "Acknowledge This Message";
		document.getElementById("dialogboxbody").innerHTML = dialog;
		document.getElementById("dialogboxfoot").innerHTML = '<button onclick="Alert.ok()">OK</button>';
	};
	this.ok = function(){
		document.getElementById("dialogbox").style.display = "none";
		document.getElementById("dialogoverlay").style.display = "none";
	};
}
var Alert = new customAlert();
