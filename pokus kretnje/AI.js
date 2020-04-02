
class Pijun{
	constructor(num){
	poz = num;
	this.selected_pawn = {x:0,y:0};
	}
	
	pos(x,y){
	this.selected_pawn = {x:x,y:y};
	if(x>1){
	poz[x-2][y]="1";}
	poz[x-1][y]="1";
	}
	
	Risi(){
		for(var i =0;i<3;i++){
			for(var j =0;j<3;j++){
				if(poz[i][j]=="1"){
				poz[i][j]=" ";
				}
			}
		}
	}
	
	move(x,y){
	poz[x][y]="♟";
		for(var i =0;i<3;i++){
			for(var j =0;j<3;j++){
			if(poz[i][j]=="1"){
				poz[i][j]=" ";
			}
		}
	}
	poz[this.selected_pawn.x][this.selected_pawn.y]=" ";
	}
	
	vrati(){
		return poz;
	}
}