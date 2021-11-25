const chunkify = (inputArray, perChunk) => {

 let array =[];
 let qtdNumeros =inputArray;
 let separador = perChunk;

  for(var i =0; i< qtdNumeros.length;){
      // array tu atribui em ti o valor no indice i até o i=i+separador  
      array.push(qtdNumeros.slice(i,(i+=separador)));
                               //i = i+separador 
  }
return array;
}


console.log("----------------------------");
console.log("Chunks de 1 items", chunkify([1, 2, 3,4], 1));
console.log("----------------------------");
console.log("Chunks de 2 items", chunkify([1, 2, 3, 4, 5, 6, 7], 2));
console.log("----------------------------");
console.log("Chunks de 3 items", chunkify([1, 2, 3, 4, 5, 6, 7], 3));
console.log("----------------------------");
console.log("Chunks de 4 items", chunkify([1, 2, 3], 4));
