// inputlar kullanıcan alınır
let weight=Number(prompt("lütfen kilonuzu 'kg' cinsinden giriniz:"));
let height=Number(prompt("lütfen boyunuzu 'cm' cinsinden giriniz:"));

// vücut kitle indeksi hesaplanır
let vki=weight/((height/100)**2);

//kullanıcı kategorisi belirlenir (pesimist davranarak üst sınırları <= yaptık)
if(vki<=18.5){
    console.log("ideal kilonun altında");
}else if(vki<=24.9){
    console.log("ideal kiloda");
}else if(vki<=29.9){
    console.log("ideal kilonun üstünde");
}else if(vki<=39.9){
    console.log("ideal kilonun çok üstünde (obez)");
}else{
    console.log("ideal kilonun çok üstünde (morbid obez)");
}
