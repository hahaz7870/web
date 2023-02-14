// l = [3, 7, 12];
// console.log(l.length)//вывод длины массива

// const year = [1920, 2013, 2020, 1996, 1630]
//  nowYear = 2023;


// function calcAge(year){
    
   
// }

// console.log(nowYear - year[0])
// console.log(nowYear - year[1])
// console.log(nowYear - year[2])

// let l = [1, 3, "F", true, "Ширина"];
// let len = l.push("Кукумбер"); //Добавление в конец
// console.log(l)//вычисляет длину
// // console.log(l);

// // let deleted = l.pop();// удаляет последний элемент
// // // .pop возвращает удаленный элемент
// // console.log(deleted);
// // console.log(l);

// l.unshift();// удаляет последний элемент
// // .unshift - добавить
// console.log(l);

// l.shift();// удаляет последний элемент
// console.log(l);

// console.log(l.indexOf(true));//Индекс эллемента
// console.log(l.indexOf("Глеб"))//Ненайденный индекс даст -1
// console.log(l.includes("Глеб"))//проверяет наличие эллементов в массиве


// let names = ["Терминатор", "Глеб", "Михаил", "Админ"]
// function nickName(a){
//     if(names){
//          b = console.log(names.includes("Глеб"));
//          let b = prompt("Имя занято")
        

//     }
//     else{

//     }
// }

//  let a = prompt("Введите имя")
 
// value2 = "d"
// const object = {
//     key1: "value1",
//     key2: value2,
//     "key3 example" : "value3"
// };

// console.log(object);
// console.log(object.key1);
// console.log(object["key1"]);//если ключ из нескольких слов, то только так.

const commonPart = "Name";
const teacher = {
    firstName: "Глеб",
    lastName: "Мелешко",
    hasDriverLicense: false,
    calcAge: function(birthYear){
        return 2023 - birthYear
    }
};

console.log(teacher.calcAge(2008));
//или
// console.log(teacher["calcAge"](2008))
console.log(teacher["first" + commonPart])//сложенная строка в кач-ве ключа

//Добавить запись в объект
//teacher.location = "Новосибирск"  //можно так
teacher["location"] = "Новосибирск" //или можно так
console.log(teacher);
//слайд 68




























