// Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
// const kurs = 26;
for(let i = 10; i <= 100; i += 10){
    let hrn = i * 26;
    // let hrn = i * kurs;
    console.log(`${i} USD = ${hrn} UAH`)
};