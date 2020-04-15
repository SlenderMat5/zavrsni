class Figurab { //tu se nlaze funkcije koje komuniciraju s micanjem i označavanjem polja za micanje
    constructor(polje) {
        this.poz = polje;
    }

    get ploc() { //varca promjenjenu plocu 
        return this.poz;
    }

    set ploc(x) { //mjenja promjene figura
            this.poz = x;
        }

        //provjera moze li se micati na ovo polje
    prov(x, y) {
        {

            switch (this.poz[x][y][0]) {
                case " ":
                    return 1;
                    break; //prazno
                case "♙": //protinikov
                case "♖":
                case "♗":
                case "♘":
                case "♕":
                case "♔":
                    return 2;
                    break;
                default://njegov bijeli drug
                    return 0;
            }
    }
}
}
/**
 * x je zapravo -y koordinata
 * y je x koordinata
 * test je broj poteza. ako je potez paran ili neparan određuje je li na redu crni ili bijeli
 * prov izlazi:
 * 1 - obicn pomak
 * 2-pomak s jedenjem
 * 3-jedenje sa strane(samo kod pijuna)
 * 
 * select su mjesta n koja se može pomaknuti ili jesi figura
 */
class Pijunb extends Figurab {
     /**pijun mora imati posebni micanje zato što jede sastrane */
     constructor(tab) {
        super(tab);
        this.tab = tab;
    }

    select(x, y,test) {
        if(test%2==0){
            
        if (x > 0 && this.tab[x - 1][y] == " ") { //pomak za jedan
            this.tab[x - 1][y] = "1";


            if (x == 6 && this.tab[x - 2][y] == " ") { //prvi pomak za dva
                this.tab[x - 2][y] = "4";
            }
		}
		if(y>0 && this.prov(x-1,y-1)==2){
            this.tab[x - 1][y-1] =  "2"+this.tab[x - 1][y-1];
        }
        
		if(y<7 && this.prov(x-1,y+1)==2){
            this.tab[x - 1][y+1] =  "2"+this.tab[x - 1][y+1];
        }
        if(x==3 && this.tab[x][y+1]== "♙s"){
            this.tab[x - 1][y+1] =  "5"+this.tab[x - 1][y+1];
        }
        if(x==3 && this.tab[x][y-1]== "♙s"){
            this.tab[x - 1][y-1] =  "5"+this.tab[x - 1][y-1];
        }
        
    }
    }

}

class Konjb extends Figurab {
    constructor(tab) {
        super(tab);
        this.tab = tab;
    }
        //micanja konja
    select(x, y, test) {
        if(test%2==0){

        if (y > 1) {
            if (x > 0) {
                if (this.prov(x - 1, y - 2)==1) {//ako je prazno

                    this.tab[x - 1][y - 2] = "1";
				}
				if (this.prov(x - 1, y - 2)==2) {//ako se nalazi protivnikov onda doda dvojku ispred 

                    this.tab[x - 1][y - 2] = "2"+  this.tab[x - 1][y - 2];/*ovo signalizira html skripti da ofarbau crveno*/
                }

            }
            if (x < 7) {
                if (this.prov(x + 1, y - 2)==1) {

                    this.tab[x + 1][y - 2] = "1";
				}                
				if (this.prov(x + 1, y - 2)==2) {

                    this.tab[x + 1][y - 2] =  "2"+ this.tab[x + 1][y - 2];
                }



            }
        }
        if (y < 6) {
            if (x > 0) {
                if (this.prov(x - 1, y + 2)==1) {
                    this.tab[x - 1][y + 2] = "1";
				}
				if (this.prov(x - 1, y + 2)==2) {
                    this.tab[x - 1][y + 2] =  "2"+ this.tab[x - 1][y + 2];
                }


            }
            if (x < 7) {
                if (this.prov(x + 1, y + 2)==1) {

                    this.tab[x + 1][y + 2] = "1";
				}
				if (this.prov(x + 1, y + 2)==2) {

                    this.tab[x + 1][y + 2] = "2"+ this.tab[x + 1][y + 2];
                }

            }
        }
        if (y > 0) {
            if (x > 1) {
                if (this.prov(x - 2, y - 1)==1) {

                    this.tab[x - 2][y - 1] = "1";
				}
				if (this.prov(x - 2, y - 1)==2) {

                    this.tab[x - 2][y - 1] =  "2"+ this.tab[x - 2][y - 1];
                }


            }
            if (x < 6) {
                if (this.prov(x + 2, y - 1)==1) {

                    this.tab[x + 2][y - 1] = "1";
				}
				if (this.prov(x + 2, y - 1)==2) {

                    this.tab[x + 2][y - 1] =  "2"+ this.tab[x + 2][y - 1];
                }


            }
        }
        if (y < 7) {
            if (x > 1) {
                if (this.prov(x - 2, y + 1)==1) {

                    this.tab[x - 2][y + 1] = "1";
				}
				if (this.prov(x - 2, y + 1)==2) {

                    this.tab[x - 2][y + 1] =  "2"+ this.tab[x - 2][y + 1];
                }


            }
            if (x < 6) {
                if (this.prov(x + 2, y + 1)==1) {

                    this.tab[x + 2][y + 1] = "1";
				}
				if (this.prov(x + 2, y + 1)==2) {

                    this.tab[x + 2][y + 1] = "2"+ this.tab[x + 2][y + 1];
                }


            }
        }
    }
}

}


class Kraljb extends Figurab {
    constructor(tab,k,l) {
        super(tab);
        this.tab = tab;
        this.t = k;
        this.z = l;
    }
        //micaje kralja
    select(x, y, test) {
        if(test%2==0){
        if (x > 0) {
            if (this.prov(x - 1, y)==1) {

                this.tab[x - 1][y] = "1";
			}
			if (this.prov(x - 1, y)==2) {

                this.tab[x - 1][y] = "2"+  this.tab[x - 1][y];
			}
			

            if (y < 7) {
                if (this.prov(x - 1, y + 1)==1) {

                    this.tab[x - 1][y + 1] = "1";
				}
				if (this.prov(x - 1, y + 1)==2) {

                    this.tab[x - 1][y + 1] = "2"+  this.tab[x - 1][y + 1];
                }
            }

            if (y > 0) {
                if (this.prov(x - 1, y - 1)==1) {

                    this.tab[x - 1][y - 1] = "1";
				}
				if (this.prov(x - 1, y - 1)==2) {

                    this.tab[x - 1][y - 1] =  "2"+  this.tab[x - 1][y - 1] ;
                }
            }

        }
        if (x < 7) {
            if (this.prov(x + 1, y)==1) {

                this.tab[x + 1][y] = "1";
			}
			if (this.prov(x + 1, y)==2) {

                this.tab[x + 1][y] =  "2"+  this.tab[x + 1][y];
            }

            if (y < 7) {
                if (this.prov(x + 1, y + 1)==1) {

                    this.tab[x + 1][y + 1] = "1";
				}
				if (this.prov(x + 1, y + 1)==2) {

                    this.tab[x + 1][y + 1] = "2"+  this.tab[x + 1][y + 1];
                }
            }

            if (y > 0) {
                if (this.prov(x + 1, y - 1)==1) {

                    this.tab[x + 1][y - 1] = "1";
				}
				if (this.prov(x + 1, y - 1)==2) {

                    this.tab[x + 1][y - 1] = "2"+  this.tab[x + 1][y - 1];
                }
            }

        }
        if (y < 7) {
            if (this.prov(x, y + 1)==1) {

                this.tab[x][y + 1] = "1";
			}
			if (this.prov(x, y + 1)==2) {

                this.tab[x][y + 1] =  "2"+ this.tab[x][y + 1];
            }

        }
        if (y > 0) {
            if (this.prov(x, y - 1)==1) {

                this.tab[x][y - 1] = "1";
			}
			if (this.prov(x, y - 1)==2) {

                this.tab[x][y - 1] =  "2"+ this.tab[x][y - 1];
            }

        }
        if(this.t){/**ako se kralj nije pomaknuo niti lijeva kula */
            if(this.prov(x,y-2)==1){
                this.tab[x][y-2] = "3";
            }
        }
        if(this.z){/**ako se kralj nije pomaknuo niti desna kula */
            if(this.prov(x,y+3)==1 && this.prov(x,y+2)==1){
                this.tab[x][y+3] = "3";
            }
        }

    }
}
}

class Kraljicab extends Figurab {
    constructor(tab) {
        super(tab);
        this.tab = tab;
    }
        //micanje kraljice
    select(x, y, test) {
        if(test%2==0){
        var tx = 0; //polja za provjeravanje
        var ty = 0; //orginalne adrese ostaju nepromjenjene
        tx = x + 1;
        ty = y + 1;
        while (tx < 8 && ty < 8) {
            if (this.prov(tx, ty)==1) {

                this.tab[tx][ty] = "1";
                tx++;
                ty++;
            } else if(this.prov(tx, ty)==2){
				this.tab[tx][ty] = "2"+this.tab[tx][ty];
				break;
			}
			else {break;}
        }
        tx = x + 1;
        ty = y - 1;
        while (tx < 8 && ty >= 0) {
            if (this.prov(tx, ty)==1) {

                this.tab[tx][ty] = "1";
                tx++;
                ty--;
            } else if(this.prov(tx, ty)==2){
				this.tab[tx][ty] = "2"+this.tab[tx][ty];
				break;
			}
			else {break;}
        }
        tx = x - 1;
        ty = y - 1;
        while (tx >= 0 && ty >= 0) {
            if (this.prov(tx, ty)==1) {

                this.tab[tx][ty] = "1";
                tx--;
                ty--;
            } else if(this.prov(tx, ty)==2){
				this.tab[tx][ty] = "2"+this.tab[tx][ty];
				break;
			}
			else {break;}

        }
        tx = x - 1;
        ty = y + 1;
        while (tx >= 0 && ty < 8) {
            if (this.prov(tx, ty)==1) {

                this.tab[tx][ty] = "1";
                tx--;
                ty++;
            } else if(this.prov(tx, ty)==2){
				this.tab[tx][ty] = "2"+this.tab[tx][ty];
				break;
			}
			else {break;}

        }
        //to prestaje lovac i počinje micanje kule(samo su kopirane kretnje za kraljicu)

        tx = x - 1;
        while (tx >= 0) {
            if (this.prov(tx, y)==1) {

                this.tab[tx][y] = "1";
                tx--;
            }  else if(this.prov(tx, y)==2){
				this.tab[tx][y] = "2"+this.tab[tx][y];
				break;
			}
			else {break;}
        }

        ty = y - 1;
        while (ty >= 0) {
            if (this.prov(x, ty)==1) {

                this.tab[x][ty] = "1";
                ty--;
			}else if(this.prov(x, ty)==2){
					this.tab[x][ty] = "2"+this.tab[x][ty];
					break;
				}
				else {break;}
        }

        tx = x + 1;
        while (tx < 8) {
            if (this.prov(tx, y)==1) {

                this.tab[tx][y] = "1";
                tx++;
            } else if(this.prov(tx, y)==2){
				this.tab[tx][y] = "2"+this.tab[tx][y];
				break;
			}
			else {break;}
        }

        ty = y + 1;
        while (ty < 8) {
            if (this.prov(x, ty)==1) {
                this.tab[x][ty] = "1";
                ty++;
            }  else if(this.prov(x, ty)==2){
				this.tab[x][ty] = "2"+this.tab[x][ty];
				break;
			}
			else {break;}
        }

    }
}

}

class Lovacb extends Figurab {
    constructor(tab) {
        super(tab);
        this.tab = tab;
    }
        //micanje lovca
    select(x, y,test) {
        if(test%2==0){

        if(test){
        var tx = 0; //polja za provjeravanje
        var ty = 0; //orginalne adrese ostaju nepromjenjene
        tx = x + 1;
        ty = y + 1;
        while (tx < 8 && ty < 8) {
            if (this.prov(tx, ty)==1) {

                this.tab[tx][ty] = "1";
                tx++;
                ty++;
            } else if(this.prov(tx, ty)==2){
				this.tab[tx][ty] = "2"+this.tab[tx][ty];
				break;
			}
			else {break;}
        }
        tx = x + 1;
        ty = y - 1;
        while (tx < 8 && ty >= 0) {
            if (this.prov(tx, ty)==1) {

                this.tab[tx][ty] = "1";
                tx++;
                ty--;
            } else if(this.prov(tx, ty)==2){
				this.tab[tx][ty] = "2"+this.tab[tx][ty];
				break;
			}
			else {break;}
        }
        tx = x - 1;
        ty = y - 1;
        while (tx >= 0 && ty >= 0) {
            if (this.prov(tx, ty)==1) {

                this.tab[tx][ty] = "1";
                tx--;
                ty--;
            } else if(this.prov(tx, ty)==2){
				this.tab[tx][ty] = "2"+this.tab[tx][ty];
				break;
			}
			else {break;}

        }
        tx = x - 1;
        ty = y + 1;
        while (tx >= 0 && ty < 8) {
            if (this.prov(tx, ty)==1) {

                this.tab[tx][ty] = "1";
                tx--;
                ty++;
            } else if(this.prov(tx, ty)==2){
				this.tab[tx][ty] = "2"+this.tab[tx][ty];
				break;
			}
			else {break;}

        }
    }
}
    }

}

class Kulab extends Figurab {
    constructor(tab) {
        super(tab);
        this.tab = tab;
    }
        //micanje kule
    select(x, y,test) {
        if(test%2==0){

        var tx = 0; //polja za provjeravanje
        var ty = 0; //orginalne adrese ostaju nepromjenjene


        tx = x - 1;
        while (tx >= 0) {
            if (this.prov(tx, y)==1) {

                this.tab[tx][y] = "1";
                tx--;
            }  else if(this.prov(tx, y)==2){
				this.tab[tx][y] = "2"+this.tab[tx][y];
				break;
			}
			else {break;}
        }

        ty = y - 1;
        while (ty >= 0) {
            if (this.prov(x, ty)==1) {

                this.tab[x][ty] = "1";
                ty--;
			}else if(this.prov(x, ty)==2){
					this.tab[x][ty] = "2"+this.tab[x][ty];
					break;
				}
				else {break;}
        }

        tx = x + 1;
        while (tx < 8) {
            if (this.prov(tx, y)==1) {

                this.tab[tx][y] = "1";
                tx++;
            } else if(this.prov(tx, y)==2){
				this.tab[tx][y] = "2"+this.tab[tx][y];
				break;
			}
			else {break;}
        }

        ty = y + 1;
        while (ty < 8) {
            if (this.prov(x, ty)==1) {
                this.tab[x][ty] = "1";
                ty++;
            }  else if(this.prov(x, ty)==2){
				this.tab[x][ty] = "2"+this.tab[x][ty];
				break;
			}
			else {break;}
        }

    }

}
}