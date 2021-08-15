let str = 'Clarusway Online Career IT Training School';
let str2 = str.split(" ")
let finalStr = "";
for (i = 0; i  < str2.length; i++){
    finalStr += str2[i].split("")[0]
}
console.log(finalStr)



