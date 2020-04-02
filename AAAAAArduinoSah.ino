void setup() {

}

void loop() {

}

void FillBoard(byte** board) {
    for(int y=0; y<8; ++y) {
        for(int x=0; x<8; ++x) {
            board[y][x] = 128;
        }
    }
}

void StartNewGame(byte** board, byte* pieces) {
        //ArrayList<Short> pieces = new ArrayList<Short>();
        //byte[] board = new byte[64];
//        pieces[0] = 0x0008; // prvi oktet = id, drugi oktet = lokacija
//        pieces[1] = 0x0109;
//        pieces[2] = 0x020a;
//        pieces[3] = 0x030b; // ajmo vidit, id (6 bita), lokacija (7 bita), figura pomaknuta (1 bit), pješak pomaknut za dva (1 bit), uzrokuje li šah (1 bit), još 1 bit za nešto (maska??)
//        pieces[4] = 0x040c; // moglo bi onda bit figura pomaknuta sljedeći, pomaknut za dva sljedeći, ID prvih  bitova, bonus prvi bit u drugom oktetu, zatim lokacija
//        pieces[5] = 0x050d;
//        pieces[6] = 0x060e;
//        pieces[7] = 0x070f; // prvih 8 bijelih pijuna
//        pieces[8] = 0x0800; // kula
//        pieces[9] = 0x0901; // skakač
//        pieces[10] = 0x0a02; // laufer
//        pieces[11] = 0x0b03; // dama
//        pieces[12] = 0x0c04; // kralj
//        pieces[13] = 0x0d05; // laufer
//        pieces[14] = 0x0e06; // skakač
//        pieces[15] = 0x0f07; // kula, 8 ostalih bijelih figura
//        pieces[24] = 0x1830;
//        pieces[25] = 0x1931;
//        pieces[26] = 0x1a32;
//        pieces[27] = 0x1b33;
//        pieces[28] = 0x1c34;
//        pieces[29] = 0x1d35;
//        pieces[30] = 0x1e36;
//        pieces[31] = 0x1f37; // 8 crnih pijuna
//        pieces[32] = 0x2038; // kula
//        pieces[33] = 0x2139; // skakač
//        pieces[34] = 0x223a; // laufer
//        pieces[35] = 0x233b; // dama
//        pieces[36] = 0x243c; // kralj
//        pieces[37] = 0x253d; // laufer
//        pieces[38] = 0x263e; // skakač
//        pieces[39] = 0x273f; // kula, 8 ostalih crnih figura

// 1b pomaknut u igri, 1b pomaknut za dva u prošlom potezu, 6b praznog,   1b praznog, 7b lokacija
        pieces[0] = 8;
        pieces[1] = 9;
        pieces[2] = 10;
        pieces[3] = 11;
        pieces[4] = 12;
        pieces[5] = 13;
        pieces[6] = 14;
        pieces[7] = 15; // prvih 8 bijelih pijuna
        pieces[8] = 0; // kula
        pieces[9] = 1; // skakač
        pieces[10] = 2; // laufer
        pieces[11] = 3; // dama
        pieces[12] = 4; // kralj
        pieces[13] = 5; // laufer
        pieces[14] = 6; // skakač
        pieces[15] = 7; // kula, 8 ostalih bijelih figura
        pieces[24] = 48;
        pieces[25] = 49;
        pieces[26] = 50;
        pieces[27] = 51;
        pieces[28] = 52;
        pieces[29] = 53;
        pieces[30] = 54;
        pieces[31] = 55; // 8 crnih pijuna
        pieces[32] = 56; // kula
        pieces[33] = 57; // skakač
        pieces[34] = 58; // laufer
        pieces[35] = 59; // dama
        pieces[36] = 60; // kralj
        pieces[37] = 61; // laufer
        pieces[38] = 62; // skakač
        pieces[39] = 63; // kula, 8 ostalih crnih figura
        pieces[48] = 255;
        pieces[49] = 0;
        board[0][0] = 8;
        board[0][1] = 9;
        board[0][2] = 10;
        board[0][3] = 11;
        board[0][4] = 12;
        board[0][5] = 13;
        board[0][6] = 14;
        board[0][7] = 15;
        board[1][0] = 0;
        board[1][1] = 1;
        board[1][2] = 2;
        board[1][3] = 3;
        board[1][4] = 4;
        board[1][5] = 5;
        board[1][6] = 6;
        board[1][7] = 7;
        board[6][0] = 16;
        board[6][1] = 17;
        board[6][2] = 18;
        board[6][3] = 19;
        board[6][4] = 20;
        board[6][5] = 21;
        board[6][6] = 22;
        board[6][7] = 23;
        board[7][0] = 24;
        board[7][1] = 25;
        board[7][2] = 26;
        board[7][3] = 27;
        board[7][4] = 28;
        board[7][5] = 29;
        board[7][6] = 30;
        board[7][7] = 31;
    }

    void RookMovablePlaces(byte** board, byte * p, byte id) {

        boolean turn = id>23;
        byte x = 0,y = 0;
        for (byte j = 0; j < 8; j++) {
            for (byte i = 0; i < 8; i++) {
                if (board[j][i] == id) {
                    x = i;
                    y = j;
                    i = 8;
                    j = 8;
                }
            }
        }
        byte lastindex = 0;

        for (auto i = 1; i < 8; i++) {
            if (x+i > 7) break;
            if (board[y][x+i] == 128) {
              p[lastindex] = (y*8+x+i);
              lastindex++;
            }
            else {
                if ((board[y][x+i] < 0x18 && turn) || (board[y][x+1] > 0x17 && !turn)) {
                  p[lastindex] = (y*8+x+i);
                  lastindex++;
                }
                break;
            }
        }
        for (auto i = -1; i > -8; i--) {
            if (x+i < 0) break;
            if (board[y][x+i] == 128) {
              p[lastindex] = (y*8+x+i);
              lastindex++;
            }
            else {
                if ((board[y][x+i] < 0x18 && turn) || (board[y][x+1] > 0x17 && !turn)) {
                  p[lastindex] = (y*8+x+i));
                  lastindex++;
                }
                break;
            }
        }
        for (auto i = 1; i < 8; i++) {
            if (y+i > 7) break;
            if (board[y+i][x] == 128) {
              p[lastindex] = ((y+i)*8+x));
              lastindex++;
            }
            else {
                if ((board[y+i][x] < 0x18 && turn) || (board[y+1][x] > 0x17 && !turn)) {
                  p[lastindex] = ((y+i)*8+x));
                  lastindex++;
                }
                break;
            }
        }
        for (auto i = -1; i > -8; i--) {
            if (x+i < 0) break;
            if (board[y+i][x] == 128) {
              p[lastindex] = ((y+i)*8+x));
              lastindex++;
            }
            else {
                if ((board[y+i][x] < 0x18 && turn) || (board[y+i][x] > 0x17 && !turn)){
                  p[lastindex] = ((y+i)*8+x));
                  lastindex++;
                }
                break;
            }
        }
    }

    
    void KnightMovablePlaces(byte** board, byte* p, byte id) {
        boolean turn = id>23;
        byte x = 0,y = 0, lastindex = 0;
        for (byte j = 0; j < 8; j++) {
            for (byte i = 0; i < 8; i++) {
                if (board[j][i] == id) {
                    x = i;
                    y = j;
                    i = 8;
                    j = 8;
                }
            }
        }

        if (x+1 < 8 && y+2 < 8) {
            if ((board[y+2][x+1] == 128) || (board[y+2][x+1] < 0x18 && turn) || (board[y+2][x+1] > 0x17 && !turn)) {
              p[lastindex] = ((y+2)*8+x+1));
              lastindex++;
            }
        }
        if (x+2 < 8 && y+1 < 8) {
            if ((board[y+1][x+2] == 128) || (board[y+1][x+2] < 0x18 && turn) || (board[y+1][x+2] > 0x17 && !turn)) {
              p[lastindex] = ((y+1)*8+x+2));
              lastindex++;
            }
        }
        if (x+2 < 8 && y-1 >= 0) {
            if ((board[y-1][x+2] == 128) || (board[y-1][x+2] < 0x18 && turn) || (board[y-1][x+2] > 0x17 && !turn)) {
              p[lastindex] = ((y-1)*8+x+2));
              lastindex++;
            }
        }
        if (x+1 < 8 && y-2 >= 0) {
            if ((board[y-2][x+1] == 128) || (board[y-2][x+1] < 0x18 && turn) || (board[y-2][x+1] > 0x17 && !turn)) {
              p[lastindex] = ((y-2)*8+x+1));
              lastindex++;
            }
        }
        if (x-1 >= 0 && y-2 >= 0) {
            if ((board[y-2][x-1] == 128) || (board[y-2][x-1] < 0x18 && turn) || (board[y-2][x-1] > 0x17 && !turn)) {
              p[lastindex] = ((y-2)*8+x-1));
              lastindex++;
            }
        }
        if (x-2 >= 0 && y-1 >= 0) {
            if ((board[y-1][x-2] == 128) || (board[y-1][x-2] < 0x18 && turn) || (board[y-1][x-2] > 0x17 && !turn)) {
              p[lastindex] = ((y-1)*8+x-2));
              lastindex++;
            }
        }
        if (x-2 >= 0 && y+1 < 8) {
            if ((board[y+1][x-2] == 128) || (board[y+1][x-2] < 0x18 && turn) || (board[y+1][x-2] > 0x17 && !turn)) {
              p[lastindex] = ((y+1)*8+x-2));
              lastindex++;
            }
        }
        if (x-1 >= 0 && y+2 < 8) {
            if ((board[y+2][x-1] == 128) || (board[y+2][x-1] < 0x18 && turn) || (board[y+2][x-1] > 0x17 && !turn)) {
              p[lastindex] = ((y+2)*8+x-1));
              lastindex++;
            }
        }
    }

    void BishopMovablePlaces(byte** board, byte* p, byte id) {

        boolean turn = id>23;
        byte x = 0,y = 0, lastindex = 0;
        for (byte j = 0; j < 8; j++) {
            for (byte i = 0; i < 8; i++) {
                if (board[j][i] == id) {
                    x = i;
                    y = j;
                    i = 8;
                    j = 8;
                }
            }
        }

        byte x2,y2;

        x2 = x++;
        y2 = y++;
        while (x2 < 8 && y2 < 8) {
            if (board[y2][x2] == 128) {
              p[lastindex] = (y2*8+x2);
              lastindex++;
            }
            else if ((board[y2][x2] < 0x18 && turn) || (board[y2][x2] > 0x17 && !turn)) {
                p[lastindex] = (y2*8+x2);
                lastindex++;
                break;
            }
            x2++;
            y2++;
        }

        x2 = x++;
        y2 = y--;
        while (x2 < 8 && y2 >= 0) {
            if (board[y2][x2] == 128) {
              p[lastindex] = (y2*8+x2);
              lastindex++;
            }
            else if ((board[y2][x2] < 0x18 && turn) || (board[y2][x2] > 0x17 && !turn)) {
                p[lastindex] = (y2*8+x2);
                lastindex++;
                break;
            }
            x2++;
            y2--;
        }

        x2=x--;
        y2=y--;
        while (x2 >= 0 && y2 >= 0) {
            if (board[y2][x2] == 128) {
              p[lastindex] = (y2*8+x2);
              lastindex++;
            }
            else if ((board[y2][x2] < 0x18 && turn) || (board[y2][x2] > 0x17 && !turn)) {
                p[lastindex] = (y2*8+x2);
                lastindex++;
                break;
            }
            x2--;
            y2--;
        }

        x2=x--;
        y2=y++;
        while (x2 >= 0 && y2 < 8) {
            if (board[y2][x2] == 128) {
              p[lastindex] = (y2*8+x2);
              lastindex++;
            }
            else if ((board[y2][x2] < 0x18 && turn) || (board[y2][x2] > 0x17 && !turn)) {
                p[lastindex] = (y2*8+x2);
                lastindex++;
                break;
            }
            x2--;
            y2++;
        }
    }

    void QueenMovablePlaces(byte** board, byte* p, byte id) {
        RookMovablePlaces(board, p, id);
        byte p2[32];
        SetAll(p2, 127);
        BishopMovablePlaces(board, p2, id);
        byte lastindex = 0, lastindex2 = 0;
        for (int i = 0; i < 32; i++) {
          if (p[i]==127) lastindex = i;
          break;
        }
        for (int j = 0; j < 32; j++) {
          if (p2[j] == 127) lastindex2 = j;
          break;
        }
        for (int k = 0; k < lastindex2; k++) {
          p[lastindex] = p2[k];
          lastindex++;
        }
    }

    void PawnMovablePlaces(byte** board, byte* figures, byte* p, byte id) {

        boolean turn = id>23;
        byte x = 0,y = 0, lastindex = 0;
        for (byte j = 0; j < 8; j++) {
            for (byte i = 0; i < 8; i++) {
                if (board[j][i] == id) {
                    x = i;
                    y = j;
                    i = 8;
                    j = 8;
                }
            }
        }

        if (!turn) {
            if (board[y++][x] == 128) {
                p[lastindex] = ((y + 1) * 8 + x);
                lastindex++;
                if (board[y + 2][x] == 128 && figures[id] > 127) {
                    p[lastindex] = ((y + 1) * 8 + x));
                    lastindex++;
                }
            }
            if (x < 7) {
                if (board[y++][x++] > 0x17) {
                  p[lastindex] = ((y+1)*8+x+1);
                  lastindex++;
                }
                if (board[y][x++] > 0x17 && board[y][x++] < 0x20 && figures[board[y][x++]] < 128) { // en passant, pogledaj ovo bolje kad radiš Move
                    p[lastindex] = (y*8+x+1);
                    lastindex++;
                }
            }
            if (x > 0) {
                if (board[y++][x--] > 0x17) {
                  p[lastindex] = ((y+1)*8+x-1);
                  lastindex++;
                }
                if (board[y][x--] > 0x17 && board[y][x--] < 0x20 && figures[board[y][x--]] < 128) {
                    p[lastindex] = (y*8+x-1);
                    lastindex++:
                }
            }
        }
        else {
            if (board[y--][x] == 128) {
                p[lastindex] = ((y - 1) * 8 + x);
                lastindex++;
                if (board[y - 2][x] == 128 && figures[id] > 127) {
                    p[lastindex] = ((y + 1) * 8 + x);
                    lastindex++;
                }
            }
            if (x < 7) {
                if (board[y++][x++] > 0x17) {
                  p[lastindex] = ((y+1)*8+x+1);
                  lastindex++;
                }
                if (board[y][x++] > 0x17 && board[y][x++] < 0x20 && figures[board[y][x++]] < 128) {
                    p[lastindex] = (y*8+x+1);
                    lastindex++;
                }
            }
            if (x > 0) {
                if (board[y++][x--] > 0x17) {
                  p[lastindex] = ((y+1)*8+x-1);
                  lastindex++;
                }
                if (board[y][x--] > 0x17 && board[y][x--] < 0x20 && figures[board[y][x--]] < 128) {
                    p[lastindex] = (y*8+x-1);
                    lastindex++;
                }
            }
        }
    }

    void KingMovablePlaces(byte** board, int16_t* figures, byte* p, byte id) {
        boolean turn = id>23;
        byte x = 0,y = 0,lastindex = 0;
        for (byte j = 0; j < 8; j++) {
            for (byte i = 0; i < 8; i++) {
                if (board[j][i] == id) {
                    x = i;
                    y = j;
                    i = 8;
                    j = 8;
                }
            }
        }

        for (auto i = -1; i < 2; i++) {
            for (auto j = -1; j < 2; j++) {
                if (x+j < 8 && x+j >= 0 && y+i < 8 && y+i >= 0) {
                    if (board[y+i][x+j] == 128 || (board[y+i][x+j] < 0x18 && turn) || (board[y+i][x+j] > 0x17 && !turn))
                        p[lastindex] = ((y+i)*8+x+j);
                        lastindex++;
                }
            }
        }

        if (!turn) {
            if (figures[12] > 0 && figures[8] > 0 && board[0][1] == 128 && board[0][2] == 128 && board[0][3] == 128) {
              p[lastindex] = 2; // ROKADA, POGLEDAJ POZORNO
              lastindex++;
            }
            if (figures[12] > 0 && figures[15] > 0 && board[0][5] == 128 && board[0][6] == 128) {
              p[lastindex] = 6;
              lastindex++;
            }
        }
        else {
            if (figures[36] > 0 && figures[32] > 0 && board[7][1] == 128 && board[7][2] == 128 && board[7][3] == 128){
              p[lastindex] = 58; // ROKADA, POGLEDAJ POZORNO
              lastindex++;
            }
            if (figures[36] > 0 && figures[15] > 0 && board[0][5] == 128 && board[0][6] == 128) {
              p[lastindex] = 6;
              lastindex++;
            }
        }
    }

    bool MovingWouldCauseChess(byte** board2, byte* figures, byte id) {
        bool turn = id>23;
        byte x = 0,y = 0;
        for (byte j = 0; j < 8; j++) {
            for (byte i = 0; i < 8; i++) {
                if (board2[j][i] == id) {
                    x = i;
                    y = j;
                    i = 8;
                    j = 8;
                }
            }
        }
        byte b[32];
        byte board[8][8];
        // samo za topove, kraljice, lovce
        // REWORKAJ OVO DOLJE
        if (!turn) {
            if ((figures[32] & 0x40) != 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              RookMovablePlaces(board, b, 32);
              if (ArrayContains(b, (figures[12] & 0x7f))) return true;
            }
            if ((figures[39] & 0x40) != 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              RookMovablePlaces(board, b, 39);
              if (ArrayContains(b, (figures[12] & 0x7f))) return true;
            }
            if ((figures[35] & 0x40) == 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              QueenMovablePlaces(board, b, 35);
              if (ArrayContains(b, (figures[12] & 0x7f))) return true;
            }
            if ((figures[34] & 0x40) == 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              BishopMovablePlaces(board, b, 34);
              if (ArrayContains(b, figures[12] & 0x7f)) return true;
            }
            if ((figures[37] & 0x40) == 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              BishopMovablePlaces(board, b, 37);
              if (ArrayContains(b, figures[12] & 0x7f)) return true;
            }
        }
        else {
            if ((figures[8] & 0x0040) == 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              RookMovablePlaces(board, b, 8);
              if (ArrayContains(b, (figures[36] & 0x007f))) return true;
            }
            if ((figures[15] & 0x0040) == 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              RookMovablePlaces(board, b, 15);
              if (ArrayContains(b, (figures[36] & 0x007f))) return true;
            }
            if ((figures[11] & 0x0040) == 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              QueenMovablePlaces(board, b, 11);
              if (ArrayContains(b, (figures[36] & 0x007f))) return true;
            }
            if ((figures[10] & 0x0040) == 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              BishopMovablePlaces(board, b, 10);
              if (ArrayContains(b, (figures[36] & 0x007f))) return true;
            }
            if ((figures[13] & 0x0040) == 0) {
              SetAll(b, 127);
              board = board2;
              board[y][x] = 128;
              BishopMovablePlaces(board, b, 13);
              if (ArrayContains(b, (figures[36] & 0x007f))) return true;
            }
        }
        
        return false;
    }

    void MovesWhenChess(byte** board, int16_t* figures, byte* p, byte id) {
      auto lastindex = 0;
      byte ar[32];
      SetAll(ar, 127);
      byte ar2[8][8];
      // nikad neće biti kralj
      
      switch (id) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31: {
          PawnMovablePlaces(board, figures, ar, id);
        }
        case 8:
        case 15:
        case 32:
        case 39: {
          RookMovablePlaces(board, ar, id);
        }
        case 9:
        case 14:
        case 33:
        case 38: {
          KnightMovablePlaces(board, ar, id);
        }
        case 10:
        case 13:
        case 34:
        case 37: {
          BishopMovablePlaces(board, ar, id);
        }
        case 11:
        case 35:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
        case 23:
        case 40:
        case 41:
        case 42:
        case 43:
        case 44:
        case 45:
        case 46:
        case 47: {
          QueenMovablePlaces(board, ar, id);
        }
      }
          // ar je "input"
          if (MovingWouldCauseChess(board, figures, id)) return;
          if (ArrayContains(ar, (figures[48] & 0x007f))) {
            p[lastindex] = figures[48] & 0x007f;
            lastindex++;
          }
          if (figures[48] == 10 || figures[48] == 13 || figures[48] == 34 || figures[48] == 37) {
            for (auto i = 0; i < 32; i++) {
              if (ar[i] == 127) break;
              byte tmp[32];
              SetAll(tmp, 127);
              ar2 = board;
              ar2[(figures[id] & 0x007f) / 8][(figures[id] & 0x007f) % 8] = 127;
              ar2[ar[i] / 8][ar[i] % 8] = id;
              BishopMovablePlaces(ar2, tmp, figures[48]);
              if (figures[48] < 24) {
                if (!ArrayContains(tmp, 36)) {
                  p[lastindex] = ar[i];
                  lastindex++;
                }
              }
              else {
                if (!ArrayContains(tmp, 12)) {
                  p[lastindex] = ar[i];
                  lastindex++;
                }
              }
            }
          }
          else if (figures[48] == 8 || figures[48] == 15 || figures[48] == 32 || figures[48] == 39) {
            for (auto i = 0; i < 32; i++) {
              if (ar[i] == 127) break;
              byte tmp[32];
              SetAll(tmp, 127);
              ar2 = board;
              ar2[(figures[id] & 0x007f) / 8][(figures[id] & 0x007f) % 8] = 127;
              ar2[ar[i] / 8][ar[i] % 8] = id;
              RookMovablePlaces(ar2, tmp, figures[48]);
              if (figures[48] < 24) {
                if (!ArrayContains(tmp, 36)) {
                  p[lastindex] = ar[i];
                  lastindex++;
                }
              }
              else {
                if (!ArrayContains(tmp, 12)) {
                  p[lastindex] = ar[i];
                  lastindex++;
                }
              }
            }
          }
          else if (figures[48] == 11 || figures[48] == 35 || (figures[48] > 15 && figures[48] < 24) || (figures[48] > 39 && figures[48] < 48)) {
            for (auto i = 0; i < 32; i++) {
              if (ar[i] == 127) break;
              byte tmp[32];
              SetAll(tmp, 127);
              ar2 = board;
              ar2[(figures[id] & 0x007f) / 8][(figures[id] & 0x007f) % 8] = 127;
              ar2[ar[i] / 8][ar[i] % 8] = id;
              QueenMovablePlaces(ar2, tmp, figures[48]);
              if (figures[48] < 24) {
                if (!ArrayContains(tmp, 36)) {
                  p[lastindex] = ar[i];
                  lastindex++;
                }
              }
              else {
                if (!ArrayContains(tmp, 12)) {
                  p[lastindex] = ar[i];
                  lastindex++;
                }
              }
            }
          }
    }

    void Move(byte** board, short* figures, byte id, byte place) {
      if (
    }



    void SetChess(byte id, short* figures, byte** board) {
      byte* m = 
      if (ArrayContains())
    }

  





    bool ArrayContains(byte* p, byte e) {
      for (int i = 0; i < sizeof(p); i++) {
        if (p[i] == e) return true;
      }
      return false;
    }

    void SetAll(byte* ar, byte el) {
      for (int i = 0; i < sizeof(ar); i++) {
        ar[i] = el;
      }
    }