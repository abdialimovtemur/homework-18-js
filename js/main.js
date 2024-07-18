// 1. Berilgan qatorni sozlash uchun faqat raqamlar va harflarni saqlab, boshqa barcha belgilarni olib tashlang.


function sanitizeString(str = "") {
    let newArr = []
    let arr = str.split(" ").join("").split("")
    arr.forEach(element => {
        if ((element.toLowerCase() > "a" && element.toLowerCase() < "z" )|| !isNaN(element)) {
            newArr.push(element)
        }
    });
    return newArr.join("")
}

console.log(sanitizeString("He@llo! w0rld#")); // "hello0rld"



// 2. Berilgan massiv ichidagi musbat va manfiy sonlarni alohida massivlarga ajratib, natijani obyekt sifatida qaytaring.

function separatePositivesAndNegatives(arr) {
    let positives = arr.filter(element => element > 0)
    let negatives = arr.filter(element => element < 0)
    return { positives, negatives }
}
// console.log(separatePositivesAndNegatives([1, -2, 3, -4, 5]));





//  3. Berilgan massiv ichida faqat bir marta uchraydigan birinchi elementni toping.

function firstUniqueElement(arr) {
    let new_arr = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        for (let g = 0; g < arr.length; g++) {
            if (arr[i] === arr[g]) {
                count++
            }
        }
        if (count == 1) {
            new_arr.push(arr[i])
        }
    }
    console.log(new_arr[0])
}

// firstUniqueElement([2, 3, 4, 2, 3, 5, 4,]); // 5







// 4. Berilgan massiv ichidagi har bir elementning takrorlanish sonini qaytaruvchi obyektni yarating.

function elementCounts(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        let count = 0
        // console.log(arr[i])
        for (let g = 0; g < arr.length; g++) {
            if (arr[i] === arr[g]) {
                count++
            }
        }
        obj[arr[i]] = count
        // console.log(count);
    }

    return obj
}

// console.log(elementCounts([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));
// { 1: 1, 2: 2, 3: 3, 4: 4 }









//  5. Berilgan massiv ichida k indeksdagi elementni oxirgi indeksdagi element bilan almashtiring.

function swapElements(arr = [], k) {
    arr.push(...arr.splice(k, 1, arr.pop()))
    console.log(arr)
}

// swapElements([1, 2, 3, 4, 5], 2); // [1, 2, 5, 4, 3]

