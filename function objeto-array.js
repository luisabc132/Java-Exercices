function objeto()
   {
      var elementos=[],x=0;
      for (key in pais) {
      elementos[x]=(pais[key]);
      x=x+1
      }
    console.log(elementos);
   }
pais = {
    name: "Uruguay",
    continent: "South America",
    capital: "Montevideo"
};
console.log(pais);
objeto();