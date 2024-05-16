const items = [
    { name: "Bike", price: 100},
    { name: "TV", price: 200},
    { name: "Album", price: 10},
    { name: "Book", price: 5},
    { name: "Phone", price: 500},
    { name: "Computer", price: 1000},
    { name: "Keyboard", price: 25}
];

/*
1. Filter
Azokat szeretnénk, ami több kerül, mint 100$

nagyon fontos, hogy ez visszaad egy tömbön, ezért el kell menteni egy változóba
*/

const filteredItems = items.filter((item)=> item.price <= 100);
console.log(filteredItems);
/*
ezt kaptuk 
Array(4) 
0: {name: 'Bike', price: 100}
1: {name: 'Album', price: 10}
2: {name: 'Book', price: 5}
3: {name: 'Keyboard', price: 25}

de ez lehetet volna úgy is, hogy használunk egy {}, de akkor viszont kell a return 
const filteredItems = items.filter((item)=> {
    return item.price <= 100
});

ez egy boolean tehát, ha true, akkor benne lesz az új tömbbe, ha viszont nem, akkor nem kerül bele

Fontos, hogy az items tömb az teljesen ugyanolyan marad!!! 
***********************************************************************************************************************************************/

/*
2. Map
Azt csinálja, hogy végigmegy az eredeti tömbön és meg tudjuk változtatni az értékeket, ami majd egy új tömbbe lesz 
és itt is az eredeti tömb az marad olyan, mint volt 
*/

const mapped = items.map((item)=> item.price * 2);
console.log(mapped);
/*
ez az új mapped tömb
[200, 400, 20, 10, 1000, 2000, 50]
*/

/*
Meg akarjuk tudni a nevét az összes item-nek 
*/
const itemNames = items.map((item)=> item.name);
console.log(itemNames); // ['Bike', 'TV', 'Album', 'Book', 'Phone', 'Computer', 'Keyboard']
/*******************************************************************************************************************************************/
/*
3. Find 
Egy objektumot talál meg egy tömbbe!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/ 

const foundItem = items.find((item)=> item.name === "Bike");
console.log(foundItem); //{ name: "Bike", price: 100}
/*
ez visszaadja az elsőt, ahol ez az állítás igaz, hogy item.name === "Bike"
**********************************************************************************************************************************************
*/
/*
4. forEach 
ez nem ad vissza semmit, ezért nem kell, hogy egy változóban legyen, ezzel csak végig tudunk iteralni egy tömbön
*/

items.forEach((a, b, c )=> {
    console.log(a);
    console.log(b);
    console.log(c);
});
/*
{name: 'Bike', price: 100}
0
(7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
{name: 'TV', price: 200}
1
(7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
{name: 'Album', price: 10}
2
(7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
{name: 'Book', price: 5}
3
(7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
{name: 'Phone', price: 500}
4
(7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
{name: 'Computer', price: 1000}
5
(7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
{name: 'Keyboard', price: 25}
6
(7) [{...}, {...}, {...}, {...}, {...}, {...}, {...}]
*/

items.forEach((item)=> console.log(item.name)); //Bike, TV, Album, Book, Phone, Computer, Keyboard
//itt mindig kell a console.log, hogy ki legyen írva!!!!!!!!!!!!!!!!!!!!!!!

items.forEach((item)=> console.log(item.price)); //100, 200, 10, 5, 500, 1000, 25
/*******************************************************************************************************************************/
/*
5. some
nem add vissza egy új tömböt, csak annyit, hogy true vagy false
*/
//megnézzük, hogy van-e olyan item, ami kevesebb mint 100 és ha van egy darab is, akkor true lesz 
const hasInexpensiveItems = items.some((item)=> item.price <= 100);
console.log(hasInexpensiveItems);

//megnézi, hogy a tömbbe, amit ide irunk a return-be az true vagy false lesz 

//van-e olyan termék, amelyik ingyenes

const freeItems = items.some((item)=> item.price <= 0);
console.log(freeItems); //false 
/******************************************************************************************************************************************/
/*
6. Every 
Nagyon hasonló, mint a some, de itt az összes elemnek teljesíteni kell a feltételt nem csak egynek és akkor lesz true 
ha valamelyik akár egy is nem teljesíti, akkor meg false lesz 
*/ 

//megnézzük, hogy minden elem kevesebb-e, mint 100
const hasInexpensiveItems2 = items.every((item)=> item.price <= 100);
console.log(hasInexpensiveItems2);//false

//kevesebb-e (vagy egyenlő), mint 1000
const hasInexpensiveItems3 = items.every((item)=> item.price <= 1000);
console.log(hasInexpensiveItems3); //true

/****************************************************************************************************************************************/
/*
7. Reduce 
Csinál valami müveletet a tömbbön
Meg akarjuk, hogy mennyi a total-ja a price-nak 
*/
const total = items.reduce((total, el)=> {
      return total += el.price;
      /*
      total ugye kezdi 0-ról, első a bike, aminek a price-ja 100, következő körben már 100-ról kezdi hozzáadjuk a TV-t, ami 200
      következő körben 300-ról kezdi
      */
}, 0);

/*
Total-nak kell lenni az első paraméternek utána meg az el-nek vagy item-nek 
itt visszaadjuk a total-t, amelyhez minden körben hozzá fogjuk adni a el-nek vagy item-nek a price-t 
és ugye nem az el-t, mert az egy objektum-nak és annak van egy olyan kulcsa, hogy price és mi azt szeretnénk 

Nagyon fontos, hogy meg kell adni neki egy kezdőértéket, ami nulla lesz 
úgy, mint a sima for-ban létrekell hozni egy sum változót, amihez fogjuk majd minden körben hozzáadni a el.price-t vagy item.price-t 
ahogy elneveztük
*/

console.log(total);//1840

let sum = 0;

for(const el of items) {
    sum += el.price;
}
console.log(sum);//1840

//Reduce nagyon hasznos, ha valaminek az összegét szeretnénk kiszámolni, pl. total-ját a price-nak itt 
/******************************************************************************************************************************************/
/*
includes, megnézi, hogy egy tömbbe, benne van-e amit akarunk megkapni 
*/
const items2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const included = items2.includes(5);
console.log(included); // true

const included2 = items2.includes(11);
console.log(included2); // false

/*
ha van egy egyszerű tömb, akkor ezt egyszerübb használni, mint a find-ot 
********************************************************************************************************************************************
*/
/*
Összegzés 
1. filter
- meg kell adni egy feltételt, hogy mi alapján akarjuk filter-elni a tömböt 
- visszaad egy új tömböt, azokkal a dolgokkal, amik megfeleltek a feltételnek 

2. map 
- végig tudunk menni egy tömb-ön, ugyanugy, mint egy forEach (különbség, hogy itt visszaad egy tömböt)
- megkapjuk, az elemet, az indexét és az egész tömböt is vissza tudjuk kapni minden iterációnál 
- nagyon fontos, hogy egy változóban kell létrehozni, mert van visszatérési értéke egy tömb és tudunk vele müveletek is csinálni 
amíg a for vagy forEach az nem add vissza semmit, általában konzol-ra kiírásra szoktuk használni
!!!!!!!!

3. find
- visszadott egy objektomot jelen esetben, mert végigment és mi megadtunk egy feltételt, hogy item.name === "Bike";
és ahol ezt elöször megtalálta ott visszaadja az egész objektumot, ezért ezt is egy változóban kell létrehozni

4. forEach 
- végigtudunk menni egy tömbön, nincs visszatérési értéke!!!! 

5.some - 6.every 
Some megnézi, hogy van-e olyan elem, ami teljesül a feltételnek, amit megadunk 
Every meg azt nézi meg, hogy minden elemre teljesül-e az a feltétel, amit megadunk 

Visszatérési értéke mindegyiknek van, ezért kell a változó, visszatérési értéke pedig mindig true vagy false!!!! 

7. reduce 
- meg kell adni sum-ot meg egy price-t mondjuk és akkor mint egy for-ban sum-hoz minden körben hozzá kell adni a price-t 
- fontos, hogy be kell állítani, hogy mennyiről induljon 

8.includes 
- itt nem kell egy function, csak megadunk neki egy értéket és megnézi, hogy benne van-e a tömbünkben
- visszatérési értéke itt is true vagy false, mint a some és az every esetében!!!! 
*/


