
let cinema1: Cinema = new Cinema();
cinema1.movieName = "Good movie";
cinema1.moviePrice = 50;

let personArray: Array<Person> = new Array<Person>(15);

getPersonArray(personArray);

function getPersonArray(arr: Array<Person>): void {

    for (let i: number = 0; i < arr.length; i++) {
        let randomNum: number = Math.round(Math.random() * 2);

        if (randomNum == 0) {
            arr[i] = new Student("Study Student", 25, "005287542", true);
        }
        else if (randomNum == 1) {
            arr[i] = new Teacher("Teachy Teacher", 35, "326598653", false);
        }
        else {
            arr[i] = new Employee("Worky Worker", 40, "025897642", true);
        }
    }
}

getPersonAndCinema(personArray, cinema1);

function getPersonAndCinema(arrPerson: Array<Person>, cinema: Cinema): void {

    let incomePerDay: number = 0;
    let allAudienceNum: number = 0;
    let studentsAudience: number = 0;
    let teachersAudience: number = 0;
    let workersAudience: number = 0;

    for (let i: number = 0; i < personArray.length; i++) {

        if (arrPerson[i] instanceof Employee) {
            incomePerDay += cinema1.moviePrice;
            allAudienceNum++;
            workersAudience++;
        }
        else if (arrPerson[i] instanceof Student){
            incomePerDay += cinema1.moviePrice- (cinema1.moviePrice * (cinema1.studentReductionPercent / 100));
            allAudienceNum++;
            studentsAudience++;
        }
        else {
            incomePerDay += cinema1.moviePrice -(cinema1.moviePrice * (cinema1.teacherReductionPercent / 100));
            allAudienceNum++;
            teachersAudience++;
        }
    }
    document.write(`Income per day:${incomePerDay}.<br/>Price for ticket:${cinema1.moviePrice}.<br/>allAudienceNum:${allAudienceNum}.
    <br/>studentsAudience:${studentsAudience}.<br/>teachersAudience:${teachersAudience}.<br/>workersAudience:${workersAudience}<br/>`);
}