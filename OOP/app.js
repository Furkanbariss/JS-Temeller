class araba {
  // 1- özellikleri
  // 2- yapıcı metod
  // 3- fonksiyonlar

  static tekerlekSayisi = 4;

  constructor(motor, renk, vites, sunroof) {
    // yapıcı metod
    this.motor = motor;
    this.renk = renk;
    this.vites = vites;
    this.sunroof = sunroof;
  }
  yazdir() {
    console.log(this.motor);
    console.log(this.renk);
    console.log(this.vites);
    console.log(this.sunroof);
  }
}

let tiugan = new araba("1.5 benzinli", "pembe", "otomatik", "yok");
tiugan.yazdir();
console.log(araba.tekerlekSayisi); // staticler class'a tanımlanan bir şeydir. yani class üzerinden tanımlanmış objelere statik özellikler geçmez. bu yüzden class üzerinden çağrılırlar.
