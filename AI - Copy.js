class Figura{//tu se nlaze funkcije koje komuniciraju s micanjem i označavanjem polja za micanje
    constructor(polje){
    this.poz=polje;
    }
get ploc(){//varca promjenjenu plocu 
    return this.poz;
}
set ploc(x){//mjenja promjene figura
    this.poz=x;
}
  
}

class Pijun extends Figura{

    constructor(tab){
        super(tab);
        this.tab=tab;
    }
       
    select(x,y){
        if(x>0 &&  this.tab[x-1][y]==" "){
        this.tab[x-1][y] = "1";
        }
        if(x==6 && this.tab[x-2][y]==" "){
        this.tab[x-2][y] = "1";
        }
}
  /*  canEat(){
        if()
    }
*/
}

class Konj extends Figura{
    constructor(tab){
        super(tab);
        this.tab=tab;
    }

    select(x,y){
            if(y>1){
                if(x>0){
                    this.tab[x-1][y-2] = "1";
                }
                if(x<7){
                    this.tab[x+1][y-2] = "1";
                }
            }
            if(y<6){
                if(x>0){
                    this.tab[x-1][y+2]= "1";
                }
                if(x<7){
                    this.tab[x+1][y+2]= "1";
                }
            }
            if(y>0){
                if(x>1){
                    this.tab[x-2][y-1] = "1";
                }
                if(x<6){
                    this.tab[x+2][y-1] = "1";
                }
            }
            if(y<7){
                if(x>1){
                    this.tab[x-2][y+1] = "1";
                }
                if(x<6){
                    this.tab[x+2][y+1] = "1";
                }
            }
    }
    
}

class Kralj extends Figura{
    constructor(tab){
        super(tab);
        this.tab=tab;
    }
    select(x,y){
        if(x>0){
           this.tab[x-1][y]="1"; 
        }
        if(x<7){
            this.tab[x+1][y]="1";             
        }
        if(y<7){
            this.tab[x][y+1]="1";  
        }
        if(y>0){
            this.tab[x][y-1]="1";   
        }
        
    }   
}

class Kraljica extends Figura{
    constructor(tab){
        super(tab);
        this.oznacen = {x:0,y:0};
    }
    select(x,y){

    }
    
}

class Lovac extends Figura{
    constructor(tab){
        super(tab);
        this.oznacen = {x:0,y:0};
    }
    select(x,y){
    }
    
}

class Kula extends Figura{
    constructor(tab){
        super(tab);
        this.oznacen = {x:0,y:0};
    }

    select(x,y){

    }
    
}