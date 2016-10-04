function test(n){
var conteo=n;
for (i=1;i<=n+1;i=i+1)
{
console.log(conteo);
conteo = conteo - 1;
}
console.log("Bum te moriste");
}
test(10);