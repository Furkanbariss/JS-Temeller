//benzin türlerinin birim fiyatları
let dizel=24.53;
let benzin= 22.25;
let lpg= 11.1;

//yakıt metni
const yeniSatir = "\r\n";
const metin= "hangi benzin türünü istersiniz:" +yeniSatir
+ "1-Dizel"+ yeniSatir
+"2-Benzin"+yeniSatir
+ "3-lpg"+yeniSatir;

//kullanıcıdan seçimi ve nekadar benzin istediği alınır
let miktar=Number(prompt("ne kadar benzin almak istiyorsunuz?"))
let secim=Number(prompt(metin));

//seçim kontrol edilir ve hesaplama yapılıp kullanıcının konsoluna yansıtılır
if(secim != 1 && secim!=2 && secim!= 3){
    alert("lütfen seçiminizi listede olan rakamlardan biri olarak giriniz");
    secim=Number(prompt(metin));
}else if(secim==1){
    console.log("toplam tutar= "+miktar*dizel);
}else if(secim==2){
    console.log("toplam tutar= "+miktar*benzin);
}else if(secim==3){
    console.log("toplam tutar= "+miktar*lpg);
}