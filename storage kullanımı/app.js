// Session Storage Kullanımı

// Veriyi session storage'a kaydetme
sessionStorage.setItem('kullaniciAdi', 'Ahmet');   

// Veriyi session storage'dan alma
const kullaniciAdi = sessionStorage.getItem('kullaniciAdi');
console.log('Kullanıcı Adı:', kullaniciAdi); // Çıktı: Kullanıcı Adı: Ahmet

// Veriyi session storage'dan silme
sessionStorage.removeItem('kullaniciAdi');

let dizi = ['elma', 'muz', 'çilek'];
// Diziyi session storage'a kaydetme (JSON.stringify ile)
sessionStorage.setItem('meyveler', JSON.stringify(dizi));
let alinanDizi = JSON.parse(sessionStorage.getItem('meyveler'));
console.log('Meyveler:', alinanDizi); // Çıktı: Meyveler: [ 'elma', 'muz', 'çilek' ]
 
// Tüm veriyi temizleme
sessionStorage.clear();


// localStorage Kullanımı

// Veriyi local storage'a kaydetme
localStorage.setItem('tema', 'koyu');

// Veriyi local storage'dan alma
const tema = localStorage.getItem('tema');
console.log('Tema:', tema); // Çıktı: Tema: koyu

// Veriyi local storage'dan silme
localStorage.removeItem('tema');
// Tüm veriyi temizleme
localStorage.clear();
