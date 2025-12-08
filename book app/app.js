let book1 = {
  bookName: "Kürk Mantolu Madonna",
  author: "Sabahattin Ali",
  price: 45,
  shelf: "1.5.shelf",
};
let book2 = {
  bookName: "Devlet",
  author: "Platon Eflatun",
  price: 65,
  shelf: "2.3.shelf",
};
let book3 = {
  bookName: "Acımak",
  author: "Reşat nuri gültekin",
  price: 25,
  shelf: "3.2.shelf",
};
let book4 = {
  bookName: "İslam Deklerasyonu",
  author: "Aliya izzet begoviç",
  price: 40,
  shelf: "5.4.shelf",
};
let book5 = {
  bookName: "Suç ve Ceza",
  author: "Fyodor Dostoyevski",
  price: 20,
  shelf: "4.1.shelf",
};

let shelf11 = { kode: "1.1.shelf", value: false };
let shelf12 = { kode: "1.2.shelf", value: false };
let shelf13 = { kode: "1.3.shelf", value: false };
let shelf14 = { kode: "1.4.shelf", value: false };
let shelf15 = { kode: "1.5.shelf", value: false };

let shelf21 = { kode: "2.1.shelf", value: false };
let shelf22 = { kode: "2.2.shelf", value: false };
let shelf23 = { kode: "2.3.shelf", value: false };
let shelf24 = { kode: "2.4.shelf", value: false };
let shelf25 = { kode: "2.5.shelf", value: false };

let shelf31 = { kode: "3.1.shelf", value: false };
let shelf32 = { kode: "3.2.shelf", value: false };
let shelf33 = { kode: "3.3.shelf", value: false };
let shelf34 = { kode: "3.4.shelf", value: false };
let shelf35 = { kode: "3.5.shelf", value: false };

let shelf41 = { kode: "4.1.shelf", value: false };
let shelf42 = { kode: "4.2.shelf", value: false };
let shelf43 = { kode: "4.3.shelf", value: false };
let shelf44 = { kode: "4.4.shelf", value: false };
let shelf45 = { kode: "4.5.shelf", value: false };

let shelf51 = { kode: "5.1.shelf", value: false };
let shelf52 = { kode: "5.2.shelf", value: false };
let shelf53 = { kode: "5.3.shelf", value: false };
let shelf54 = { kode: "5.4.shelf", value: false };
let shelf55 = { kode: "5.5.shelf", value: false };

let bookcase = [
    [shelf11,shelf12,shelf13,shelf14,shelf15],
    [shelf21,shelf22,shelf23,shelf24,shelf25],
    [shelf31,shelf32,shelf33,shelf34,shelf35],
    [shelf41,shelf42,shelf43,shelf44,shelf45],
    [shelf51,shelf52,shelf53,shelf54,shelf55]
];

function createShelf(){
    for (let i=0;i<bookcase.length;i++){
        for(let j=0; j<5 ;j++){
            satir+="|"+bookcase[i][j].kode+"|";
        }
        console.log
    }
}
// yarım bırakıldı.