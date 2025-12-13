function print(e) {
  e = "normal fonksiyon tanımlaması";
  console.log(e);
}

let print2 = (e) => {
  e = "arrow funtion tanımlaması";
  console.log(e);
};

document.addEventListener("DOMContentLoaded", () =>
  console.log("genel kullanım örneği")
);

let b = "";
print(b);
print2(b);

// eğer tek satırsa parantezlere felan gerek yok
