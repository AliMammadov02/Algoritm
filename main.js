let say
let mermiler=30;
let i;
console.log("1.Gulleni tek tek at ",
"\n2.Gullenin hamisini birden at ",
"\n3.Mermini yeniden doldur ",
"\n4.Oyundan cix ","\n5.Mermi sayini goster")

while(true){
say=prompt("Gulle","Bir reqem secin");
if(say == "1")
{mermiler--;
console.log(mermiler);

}
else if(say == "2")
{
    for(i = mermiler;i>=0;i--)
    {
        mermiler=0
        console.log(i)

    }
}
else if(say == "3")
{
    for(i = 1;i<=30;i++)
    console.log(i)
    
}
else if(say == "4")
{break;}
else if(say == "5")
{ console.log(mermiler)}
else
{console.log("Duzgun reqem daxil et")}
}