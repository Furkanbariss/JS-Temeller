
// 14 = 2 , 3, 4, 5, 6, 7, 8, 9 ...

let input=Number(prompt("Lütfen asal testi yapmak istediğiniz sayıyı giriniz:"));
let sonuc=true;
let i=2;
// for(let i=2;i<=Math.floor(input/2);i++){
//     if(input%i==0){
//         sonuc=false;
//         break;
//     }
// }

do{
 if(input%i==0){
        sonuc = false;
        break;
     }
    i++;
}while(i<=Math.floor(input/2));

if(sonuc){
    alert(input+" sayısı asal sayıdır.");
}else{
    alert(input+" sayısı asal sayı değildir.");
}