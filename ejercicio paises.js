function orden(nom1, nom2, nom3, nom4)
{
   var nombres,nombrespreparados=[],i,x=0,v;
   nombres=[nom1, nom2, nom3, nom4];

   for (i=0;i<nombres.length;i=i+1)
      {
         if (i !== 2)
            {
               nombrespreparados[x]=(nombres[i]);
               x=x+1;
               
            }
         else
            {
               nombrespreparados[i]=(nombres[i]);
               nombrespreparados[i+1]=("and");
               
               x=x+2;
            }
     
       }
  
   console.log(nombrespreparados);

  
}
orden("canada","mexico","turkey","japon");