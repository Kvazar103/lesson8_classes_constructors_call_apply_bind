// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
console.log("- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone\n" +
    "створити пустий масив, наповнити його 10 об'єктами new User(....)")
function User(id,name,surname,email,phone){
    this.id=id;
    this.name=name;
    this.surname=surname
    this.email=email;
    this.phone=phone
}

let users=[]
for (let i=0;i<10;i++){
    users[i]=new User(i,'vasya','pupkin','pupkin@gmail.com',1223132)
}
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
console.log("- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , " +
    "залишивши тільки об'єкти з парними id (filter)")
users=users.filter(function (el){
    return (el.id%2===0)
})
console.log(users)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
console.log("- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)")
console.log(users.sort((a,b)=>a.id-b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
console.log("- створити класс для об'єктів Client з полями id, name, surname , " +
    "email, phone, order (поле є масивом зі списком товарів)\n" +
    "створити пустий масив, наповнити його 10 об'єктами Client")

class Client{
    constructor(id,name,surname,email,phone,order=[]) {
        this.id=id;
        this.name=name;
        this.surname=surname;
        this.email=email;
        this.phone=phone;
        this.order=order
    }
}
let Clients=[]
Clients[0]=new Client(1,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa','car'])
Clients[1]=new Client(2,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa','car','dfdfdf','sdsdsds'])
Clients[2]=new Client(3,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa'])
Clients[3]=new Client(4,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa','car'])
Clients[4]=new Client(5,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa','car','fdfd','sddsds','dddd','car','ssss','wwww'])
Clients[5]=new Client(6,'vasya','pupkin','vasykaPupkin@gmail.com',123,['car'])
Clients[6]=new Client(7,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa','car','esas'])
Clients[7]=new Client(8,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa','car','irma'])
Clients[8]=new Client(9,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa','car'])
Clients[9]=new Client(10,'vasya','pupkin','vasykaPupkin@gmail.com',123,['asa'])

console.log(Clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log("- Взяти масив (Client [] з попереднього завдання)." +
    "Відсортувати його по кількості товарів в полі order по зростанню. (sort)\n")
console.log(Clients.sort((a,b)=> a.id-b.id));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, ' +
// 'виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

console.log("- Створити функцію конструктор яка дозволяє створювати об'єкти car, " +
    "з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:\n" +
    "    -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`\n" +
    "    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`\n" +
    "    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed\n" +
    "    -- changeYear (newValue) - змінює рік випуску на значення newValue\n" +
    "-- addDriver (driver) - приймає об'єкт який \"водій\" з довільним набором полів, і додає його в поточний об'єкт car")

function Car(model,manufacture,year,max_speed,engine_capacity){
    this.model=model;
    this.manufacture=manufacture;
    this.year=year;
    this.max_speed=max_speed;
    this.engine_capacity=engine_capacity;
    this.drive=function (){
        console.log(`їдемо зі швидкістю ${max_speed} на годину`)
    }
    this.info=function (){
        console.log(`model-${model}
                    manufacture-${manufacture}
                    year-${year}
                    max speed-${max_speed}
                    engine capacity-${engine_capacity}`)
    }
    this.increaseMaxSpeed=function (newSpeed){
        console.log("Car new max speed:"+`${newSpeed}`)
        return max_speed=newSpeed
    }
    this.changeYear=function (newValue){
        console.log("New year of car:"+`${newValue}`)
        return year=newValue
    }
    this.addDriver=function (driver){
        this.driver=driver
    }
}
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, 
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log("- (Те саме, тільки через клас)\n" +
    "Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, " +
    "максимальна швидкість, об'єм двигуна. додати в об'єкт функції:\n" +
    "-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`\n" +
    "    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`\n" +
    "    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed\n" +
    "    -- changeYear (newValue) - змінює рік випуску на значення newValue\n" +
    "    -- addDriver (driver) - приймає об'єкт який \"водій\" з довільним набором полів, і додає його в поточний об'єкт car")

class Car1{
    constructor(model,manufacture,year,max_speed,engine_capacity) {
        this.model=model;
        this.manufacture=manufacture;
        this.year=year;
        this.max_speed=max_speed;
        this.engine_capacity=engine_capacity;
        this.drive=function (){
            console.log(`їдемо зі швидкістю ${max_speed} на годину`)
        }
        this.info=function (){
            console.log(`model-${model}
                    manufacture-${manufacture}
                    year-${year}
                    max speed-${max_speed}
                    engine capacity-${engine_capacity}`)
        }
        this.increaseMaxSpeed=function (newSpeed){
            console.log("Car new max speed:"+`${newSpeed}`)
            return max_speed=newSpeed
        }
        this.changeYear=function (newValue){
            console.log("New year of car:"+`${newValue}`)
            return year=newValue
        }
        this.addDriver=function (driver){
            this.driver=driver
        }
    }
}
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log("-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. " +
    "Створити масив з 10 попелюшок.\n" + 
    "Сторити об'єкт класу \"принц\" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.\n" +
    "За допомоги циклу знайти яка попелюшка повинна бути з принцом.\n" +
    "Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку")

function Cinderella(name,age,foot_size){
    this.name=name;
    this.age=age;
    this.foot_size=foot_size;
}
let Cinderellas=[]
for(let i=0;i<10;i++){
    Cinderellas[i]=new Cinderella('natasha','18',i+1)
}
console.log(Cinderellas)

class Prince{
    constructor(name,age,size_of_shoe_that_he_found) {
        this.name=name;
        this.age=age;
        this.size_of_shoe_that_he_found=size_of_shoe_that_he_found;
    }
}
let first_Prince=new Prince('petya',24,8)
console.log(first_Prince)
for(let i=0;i<Cinderellas.length;i++){
    if(Cinderellas[i].foot_size===first_Prince.size_of_shoe_that_he_found){
        console.log("Prince "+`${first_Prince.name} `+"with size of shoe: "+`${first_Prince.size_of_shoe_that_he_found} `
        +" found Cinderella "+`with foot size:${Cinderellas[i].foot_size}`)
    }
}
function isRightShoesOfCinderella(cinder){
        if(cinder.foot_size===first_Prince.size_of_shoe_that_he_found){
            console.log(first_Prince,cinder)
            return true
        }else {
            console.log(`Prince shoe that he found: `+first_Prince.size_of_shoe_that_he_found+` Cinderella shoe:`+ `${cinder.foot_size}`)
            return false
    }
}
Cinderellas.find(isRightShoesOfCinderella)










