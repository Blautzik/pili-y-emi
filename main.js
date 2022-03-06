function leerCsv(planilla, separar=",") {
    return planilla.slice(planilla.indexOf("\n") + 1)
    .split("\n")
    .map(l => l.split(separar));
}


let arrayVinos = leerCsv("nombre,cepa,region,año,precio,precio soc.,\nALTALAND PINOT NOIR,pinot noir,mendoza,2020,490,588,\nALTALAND TORRONTES,torrontes,mendoza,2020,490,588,\nALTALAND TINTO HISTORICO,blend,mendoza,2020,490,588,\nBRESSIA LAGRIMA CANELA,blend,mendoza,2020,1450,588,\nBRESSIA MONTEAGRELO,blend,mendoza,2020,990,1740,\nBRESSIA PIEL NEGRA ,pinot noir,mendoza,2020,1690,1188,\nSOTANO RESERVA MALBEC,malbec,mendoza,2020,560,2028,\nSOTANO RESERVA CABERNET SAUVIGNON,cabernet sauvignon,mendoza,2020,560,672,\nSOTANO RESERVA BLEND,blend,mendoza,2020,560,672,\nSOTANO RESERVA DE FAMILIA MALBEC,malbec,valle de uco,2020,780,672,\nSOTANO RESERVA DE FAMILIA CABERNET SAUVIGNON,cabernet sauvignon,valle de uco,2018,780,936,\nSOTANO BARRAVAS CABERNET FRANC,cabernet franc,valle de uco,2018,1420,936,\nSOTANO MARIA MAGDALENA CHARDONNAY,chardonnay,valle de uco,2018,1315,1704,\nSOTANO JUDAS  MALBEC,malbec,valle de uco,2018,3640,1578,\nSOTANO JUDAS BLEND,blend,valle de uco,2018,4160,4368,\nLA BANDA DE LOS TRES SUCIOS,blend,valle de uco,2018,630,4992,\nTHE TROUBLE MAKERS,malbec,valle de uco,2018,375,756,\nVICENTIN INDOMABLE BLANC DE MALBEC,malbec,patagonia,2019,335,450,\nVICENTIN INDOMABLE BLEND DE MALBEC,malbec,patagonia,2019,465,402,\nVICENTIN VORAZ,blend,patagonia,2021,560,558,\nVICENTIN BACK BONE,blend,patagonia,2021,560,672,\nVICENTIN ARROGANTE SYRAH,syrah,patagonia,2021,1420,672,\nVICENTIN MALDITO,blend,patagonia,2021,1315,672,\nALANDES CONCRETE TANK BLEND,blend,cuyo,2021,3640,672,\nALANDES PARADOUX RED BLEND,blend,cuyo,2017,4160,1668,\nALANDES PARADOUX BLEND DE BLANC DE BLANCS,blend,cuyo,2020,630,870,\nALANDES UCO VALLEY MALBEC,malbec,cuyo,2020,375,1260,\nANDILLIAN TORRONTES,torrontes,puna,2020,335,2172,\nANDILLIAN CHARDONNAY,chardonnay,puna,2020,465,600,\nANDILLIAN MALBEC,malbec,puna,2020,560,1740,\n");


console.log(arrayVinos);




for (i =0; i<=arrayVinos.length; i++){
    document.write("<div class='producto__box'>");
    i++;
    for(x=0; x<=5; x++){
        document.write(arrayVinos[i][x]+"</br>");
    }
};

console.log(arrayVinosObj);