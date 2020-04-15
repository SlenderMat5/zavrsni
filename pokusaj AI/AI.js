vrijednosti = [
	[50,20,25,0,100,25,20,50],
	[1,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0],
	[-1,-1,-1,-1,-1,-1,-1,-1],
	[-50,-20,-25,-100,-100,-25,-20,-50]
	];

function cijeloStanje(){
if(this.pot%2==1){
	for(i=0;i<8;i++){
		for(j=0;j<8;j++){
			switch(poz[i][j].substring(0,1)){
				case "♙": pijun.select(i,j,this.pot);tu();vrijednosti[i][j] = 1;break;
				case "♖": kula.select(i,j,this.pot);tu();vrijednosti[i][j] = 50;break;
				case "♗": lovac.select(i,j,this.pot);tu();vrijednosti[i][j] = 20;break;
				case "♘": konj.select(i,j,this.pot);tu();vrijednosti[i][j] = 25;break;
				case "♕": kraljica.select(i,j,this.pot);tub();vrijednosti[i][j] = 100;break;
				case "♔": kralj.select(i,j,this.pot);tu();vrijednosti[i][j] = 0;break;
				default: break;
				}
	}
}
console.table(vrijednosti);
pogledStanjaCrni();
pot++;

for(i=0;i<8;i++){
	for(j=0;j<8;j++){
		switch(poz[i][j].substring(0,1)){
			case "♟": pijunb.select(i,j,this.pot);tub();vrijednosti[i][j] = -1;break;
			case "♜": kulab.select(i,j,this.pot);tub();vrijednosti[i][j] = -50;break;
			case "♝": lovacb.select(i,j,this.pot);tub();vrijednosti[i][j] = -20;break;
			case "♞": konjb.select(i,j,this.pot);tub();vrijednosti[i][j] = -25;break;
			case "♛": kraljicab.select(i,j,this.pot);tub();vrijednosti[i][j] = -100;break;
			case "♚": kraljb.select(i,j,this.pot);tub();vrijednosti[i][j] = -100;break;
			case " ": vrijednosti[i][j] = 0;break;
			default: break;
			}
}
}
pogledStanjaBijeli()
pot++;

}
else{
	console.log("nije moj potez");
}
}

function pogledStanjaCrni(){
	for(i=0;i<8;i++){
		for(j=0;j<8;j++){
			if(poz[i][j].substring(0,1)=="1" || poz[i][j].substring(0,1)=="2"){
				vrijednosti[i][j]-=1;
			}
			if(poz[i][j]==" "){
				vrijednosti[i][j] = 0;
			}
		}
	}
	cisti();
}
function pogledStanjaBijeli(){
	for(i=0;i<8;i++){
		for(j=0;j<8;j++){
			if(poz[i][j].substring(0,1)=="1" || poz[i][j].substring(0,1)=="2"){
				vrijednosti[i][j]+=1;
			}
			if(poz[i][j]==" "){
				vrijednosti[i][j] = 0;
			}
		}
	}
	cisti();
}


/*možda kasnije*/


					/*		switch(poz[i][j].substring(0,1)){
						case "♙": pijun.select(i,j,this.pot);tu();vrijednosti[i][j] = 1;pogledStanjaCrni();cisti();break;
						case "♖": kula.select(i,j,this.pot);tu();vrijednosti[i][j] = 50;/*pogledStanjaCrni();cisti();break;
						case "♗": lovac.select(i,j,this.pot);tu();vrijednosti[i][j] = 20;/*pogledStanjaCrni();cisti();break;
						case "♘": konj.select(i,j,this.pot);tu();vrijednosti[i][j] = 25;/*pogledStanjaCrni();cisti();break;
						case "♕": kraljica.select(i,j,this.pot);tub();vrijednosti[i][j] = 100;/*pogledStanjaCrni();cisti();break;
						case "♔": kralj.select(i,j,this.pot);tu();vrijednosti[i][j] = 0;/*pogledStanjaCrni();cisti();break;
					
						case "♟": pijunb.select(i,j,this.pot);tub();vrijednosti[i][j] = -1;/*pogledStanjaBijeli();cisti();break;
						case "♜": kulab.select(i,j,this.pot);tub();vrijednosti[i][j] = -50;/*pogledStanjaBijeli();cisti();break;
						case "♝": lovacb.select(i,j,this.pot);tub();vrijednosti[i][j] = -20;/*pogledStanjaBijeli();cisti();break;
						case "♞": konjb.select(i,j,this.pot);tub();vrijednosti[i][j] = -25;/*pogledStanjaBijeli();cisti();break;
						case "♛": kraljicab.select(i,j,this.pot);tub();vrijednosti[i][j] = -100;/*pogledStanjaBijeli();cisti();break;
						case "♚": kraljb.select(i,j,this.pot);tub();vrijednosti[i][j] = -100;/*pogledStanjaBijeli();cisti();break;
						case " ": vrijednosti[i][j] = 0;break;
						default: break;
							}*/