let balance=1000;
let viewBalance;

const yeniSatir="\r\n";
const metin="Hoşgeldiniz"+yeniSatir+
"Lütfen yapmak istediğiniz işlemi tuşlayın:"+yeniSatir+
"1-Bakiye görüntüleme"+yeniSatir+
"2-Para çekme"+yeniSatir+
"3-Para yatırma"+yeniSatir+
"4-Çıkış"

let secim=Number(prompt(metin));
if(secim==1||secim==2||secim==3||secim==4){
    switch(secim){
        case 1:
            alert("bakiyeniz: "+balance);
            break;
        case 2:
            let withdrawal=Number(prompt("çekmek istediğiniz tutarı giriniz:"));
            balance=balance-withdrawal;
            alert("yeni bakiyeniz: "+balance);
            break;    
        case 3:
            let depositMoney=Number(prompt("lütfen yatımak istediğiniz parayı giriniz: "));
            balance=balance+depositMoney;
            alert("yeni bakiyeniz: "+balance);
            break;
        case 4:
            alert("sistemden çıkış yapılmıştır...");
            break;
        default:
            alert("Lütfen 1-4 aralığında bir değer giriniz.");
            break;    
    }
}else{
    alert("Lütfen işleminizi 1,2,3,4 olarak tuşlatınız.");
};