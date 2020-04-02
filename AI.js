function upit(a){
	senis = document.getElementById("bt");
	var cont=" "
	for(var i = 0;i<8;i++){
		cont+="<p>"
		for(var j = 0;j<8;j++){
	cont += "   "+a[i][j];
	}
			cont+="</p>"
	}
	senis.innerHTML=cont;
}

var pijun_crni={
	pozicija_x 	: 0,
	pozicija_y 	: 0,
	life 		: 1,
	value 		: 10,
	boja 		: 0,
	diran		: 0,
	kretnja 	: function(){
		if(diran > 0){
		return [this.pozicija_x,this.pozicija_y-1];
		}
	else{
		return [[this.pozicija_x,this.pozicija_y-2],[this.pozicija_x,this.pozicija_y-1]];		
	}
	},
	napad		: function(){
		return [[this.pozicija_x+1,this.pozicija_y-1],[this.pozicija_x-1,this.pozicija_y-1]]
	}
}

var pijun_bijeli={
	pozicija_x 	: 0,
	pozicija_y 	: 0,
	life 		: 1,
	value 		: 10,
	boja 		: 1,
	diran		: 0,
	kretnja 	: function(){
		if(diran > 0){
		return [this.pozicija_x,this.pozicija_y+1];
		}
	else{
		return [[this.pozicija_x,this.pozicija_y+2],[this.pozicija_x,this.pozicija_y+1]];		
	}
	}
	napad		: function(){
		return [[this.pozicija_x+1,this.pozicija_y+1],[this.pozicija_x-1,this.pozicija_y+1]]
	}	
}