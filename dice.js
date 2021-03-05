var a=Math.floor(Math.random()*6)+1;
var b=Math.floor(Math.random()*6)+1;
// console.log(a);
// console.log(b);
var s1="images/dice"+a+".png";
var s2="images/dice"+b+".png";
document.querySelector(".img1").setAttribute("src",s1);
document.querySelector(".img2").setAttribute("src",s2);
if(a>b)
{
  document.querySelector("h1").textContent ="Player 1 wins🕶🕶" ;
}
else if(a<b)
{
  document.querySelector("h1").textContent="Player 2 wins🕶🕶";
}
else
{
  document.querySelector("h1").textContent="Its a Draw";
}
