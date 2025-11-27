//kullanıcıdan metin alınacak
let text=prompt("lütfen harf sayısını bulmak istediğiniz metni giriniz:");

//kullanıcan aranmak istenen harf alınacak
let word= prompt("lütfen girmiş olduğunuz metindeki saymak istediğiniz harfi giriniz:");

//bu harf içerisinde var mı yok mu tek tek incelenecek
function wordCounter(word){
    let count=0;
    for(let i=0;i<text.length;i++){
        if(text.charAt(i).toLowerCase()===word.toLowerCase()){
            count +=1;
        }
    }
    return count;
}

//kullanıcının ekranına miktarı yazdırılacak
let answer = wordCounter(word);
alert("toplam harf sayısı" + answer);