
let input=Number(prompt("lütfen binary tipine çevirmek istediğiniz sayıyı giriniz: "));
let a=convertBinary(input);
alert(a);

function convertBinary(number){
        let binary="";
    while(true){
        binary+=(number%2).toString();
        number=Math.floor(number/2);
        if(number==1){
        binary+=1;
        break;
        }
    }
    let reversed=reverseBinary(binary);
    return reversed; 
}

function reverseBinary(reversebin){
    let reverse="";
    for(let i =reversebin.length-1 ; i>=0 ; i--){
        reverse +=reversebin.charAt(i);
    }
    console.log(typeof reversebin);
    console.log(reverse);
    return reverse;
}