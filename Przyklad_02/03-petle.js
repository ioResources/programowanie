/*
 * 1
 * Wyświetlanie linijki złożonej z gwiazdek.
 * Długość linijki ustalana wartością zmiennej dlg.
 * Zastosowana pętla do-while.
 */ 
var dlg = 0;

var i = 0;
do {
    document.write("*");
    i = i + 1;
} while (i < dlg);

/*
 * 2
 * To samo co 1, ale z wykorzystaniem pętli while.
 */ 
var dlg = 1;

var i = 0;
while (i < dlg) {
    document.write("*");
    i = i + 1;
}

/*
 * 3
 * To samo co 2, ale z wykorzystaniem pętli for.
 */ 
var dlg = 3;

for (var i=0 ; i<dlg ; i=i+1 ) {
    document.write("@");     
}

/*
 * 4
 * Rysowanie prostokąta z gwiazdek.
 * Długość boków ustalana wartościami zmiennych szer i wys.
 */ 
var szer = 20;
var wys = 10;

for (var w=0; w<wys; w++) {
    
    for (var k=0; k<szer; k++) {
        document.write("*");     
    }
    document.write("<br>");    

}

/*
 * 5
 * Rysowanie prostokąta z krawędzią z gwiazdek i wypełnieniem ze znaków "x".
 */ 
var szer = 20;
var wys = 10;

for (var w=0; w<wys; w++) {
    
    for (var k=0; k<szer; k++) {
        if (w==0 || w==wys-1
         || k==0 || k==szer-1) {
            document.write("*");     
        } else {
            document.write("x");
        }
    }
    document.write("<br>");    
}
