
function barGrow() {
    var emitters = 10;
    var gridHSize = 10;
    var gridVSize = 30;
    var gridSize = gridHSize * gridVSize;
    var posiId = 1;
    var positions = [];
    var pickedPositions = [];
    for(var hPosi=1;hPosi<=gridHSize;hPosi++) {
        for(var vPosi=1;vPosi<=gridVSize;vPosi++) {
            positions.push({id:posiId, coordsString: hPosi + "-" + vPosi, coords:{x:hPosi, y:vPosi}});
            posiId++;
        }
    }

    /*positions.map(function(c) {
    	var x = document.createElement("span");
        x.style.top = c.coords.x - 1 + "px";
        x.style.left = c.coords.y - 1 + "px";
        x.style.width = "1px";
        x.style.height = "1px";
        x.style.display = "block";
        x.style.background = "green";
        x.style.position = "absolute";
    	document.getElementById("root").appendChild(x);
	});*/


    for(var i=1;i<=emitters;i++) {
        //pick a position within the grid that's not already taken
        var centerOffset = 0;
        if(centerOffset != 0) {
	        var xC = getRandomIntInclusive(gridHSize/centerOffset, gridHSize - (gridHSize/centerOffset));
	        var yC = getRandomIntInclusive(gridVSize/centerOffset, gridVSize - (gridVSize/centerOffset));
        } else {
	        var xC = getRandomIntInclusive(1, gridHSize-1);
	        var yC = getRandomIntInclusive(1, gridVSize-1);
        }
        console.log(xC);
        var pickedIndex =  getPosiByCoordString(xC+"-"+yC); 
		var x = document.createElement("span");
        x.id = positions[pickedIndex].id;
        x.style.top = positions[pickedIndex].coords.y * 1 + "px";
        x.style.left = positions[pickedIndex].coords.x * 1 + "px";
        x.className = " glyphicon glyphicon-star progressEffectsStar";
/*
		if(positions[pickedIndex].coords.y <= (gridVSize/2)) {
        	x.style.animationName = "upwards";
        } else {
        	x.style.animationName = "downwards";
        }

        if(positions[pickedIndex].coords.x >= (gridHSize/2)) {
        	x.style.animationName += "-right";
        } else {
        	x.style.animationName += "-left";
        }
        */
        x.style.animationDelay = getRandomArbitrary(0,1) + "s";
        //x.appendChild(document.createTextNode(positions[pickedIndex].coordsString));
        document.getElementById("progressEffectsStarWrap").appendChild(x);


        addPickedPositions(0, pickedIndex);
        gridSize--;
        if(gridSize<1) {
        	break;
        }
    }

		function getPosiByCoordString(string) {
			return positions.map(function(e) { return e.coordsString; }).indexOf(string);
		}
		function addPickedPositions(padding, pickedIndex) {

			var x = positions[pickedIndex].coords.x;
			var y = positions[pickedIndex].coords.y;
			var array = [];
			array.push(x+"-"+y);
			for(var p=1;p<=padding;p++) {

				for(var pp=1;pp<=padding;pp++) {
					array.push((x+p)+"-"+(y-(1*pp)));
					array.push((x+p)+"-"+(y+(1*pp)));
					array.push((x-p)+"-"+(y-(1*pp)));
					array.push((x-p)+"-"+(y+(1*pp)));
				}
				
				array.push((x+p)+"-"+(y));
				array.push((x-p)+"-"+(y));
				array.push((x)+"-"+(y+p));
				array.push((x)+"-"+(y-p));

				array.map(function(x) {
					pushToPickedPosition(positions[getPosiByCoordString(x)]);
					spliceAtPickedPosition(getPosiByCoordString(x));
				});
			}

		}

		function spliceAtPickedPosition(pickedPosition) {
			if(typeof pickedPosition != "undefined" && pickedPosition != -1) {
				positions.splice(pickedPosition, 1);
			}
		}
		function pushToPickedPosition (pickedPosition) {
			if(typeof pickedPosition != "undefined") {
				pickedPositions.push(pickedPosition);
        		gridSize--;
			}
		}

};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}