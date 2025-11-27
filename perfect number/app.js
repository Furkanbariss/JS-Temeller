// 6 = 1 2 3 6 --> 12 = 2*6 ;

//kullanıcıdan sayıyı alırım
let number=Number(prompt("lütfen girmek istediğiniz sayıyı belirtiniz:"));
//bu sayının çarpanlarını for döngüsü ve mod kullanarak bulurum , bunları aynı döngünün içerisinde toplarım
function isPerfectNumber(number){
    let sum= 0;
    let answer=false;
    for(let i=0;i<=number/2;i++){
        if(number%i==0){
            sum +=i;
        }
    }
    sum += number;
    if (sum%number==0){
        answer = true;
    }else{
        answer = false;
    }
    return answer;
}

let output=isPerfectNumber(number);
//if else döngüsüyle eşit olup olmadığını sorgularım ve sonucu kullanıcıya yazdırırım
if (output){
    alert(number +" sayısı bir mükemmel sayıdır.");
}else{
    alert(number +" sayısı bir mükemmel sayı değildir!");
}