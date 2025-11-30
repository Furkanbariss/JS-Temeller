// verilerim
let object0 = {
    brand: "Samsung",
    Device_name: "Samsung Galaxy S24 Ultra",
    price: 69999
};

let object1 = {
    brand: "Apple",
    Device_name: "iPhone 15 Pro Max",
    price: 89999
};

let object2 = {
    brand: "Xiaomi",
    Device_name: "Xiaomi 14 Ultra",
    price: 59999
};

let object3 = {
    brand: "Huawei",
    Device_name: "Huawei Pura 70 Ultra",
    price: 49999
};

let object4 = {
    brand: "Samsung",
    Device_name: "Samsung Galaxy Z Flip 5",
    price: 39999
};

let object5 = {
    brand: "Apple",
    Device_name: "iPhone SE (3. Nesil)",
    price: 26999
};

// kullanıcıdan input al
let input = prompt("Lütfen aramak istediğiniz telefon modelinin markasını giriniz?")

//arama algoritması
smartPhones.brand.forEach(function(input){
    if (smartPhones.brand.includes(input)){
        console.log(smartPhones(smartPhones.brand.indexOf(input)));
        console.log("--------------------------");
    }
});