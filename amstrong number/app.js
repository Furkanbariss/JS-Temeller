let sayi=prompt("sayıyı giriniz:");
let toplam = 0;
for(let i=0;i<sayi.length;i++){
    let rakam = sayi.charAt(i);
    toplam += rakam**3;
}

if(toplam==sayi){
    alert("bu sayı bir amstrong sayıdır!");
}else{
    alert("bu sayı bir amstrong sayı değildir!");
}