
var counterId = 0;

function saveChanges() {

    let formArr = new Array();

    formArr[0] = document.getElementById("fullName").value;
    formArr[1] = document.getElementById("age").value;
    formArr[2] = document.getElementById("date").value;
    formArr[3] = document.getElementById("colr").value;



    var chackFields = 0;

    for (let x of formArr) {
        if (x) {
            chackFields++;
        }
    }

    if (chackFields == formArr.length) {

        formArr[0] = "Full name:" + document.getElementById("fullName").value;
        formArr[1] = "Age:" + document.getElementById("age").value;
        formArr[2] = "Birth date:" + document.getElementById("date").value;
        formArr[3] = "color:" + document.getElementById("colr").value;

        counterId = counterId ? counterId : (localStorage.length - 1);


        localStorage.setItem("counter", ++counterId);

        var liId = localStorage.getItem("counter");

        if (formArr[0] != localStorage.getItem(formArr[0])) {

            document.getElementById("history").outerHTML += `<li id='${liId}'></li>`;
        }

        localStorage.setItem(liId + "", JSON.stringify(formArr));

        let printHistory = localStorage.getItem(liId + "");

        printHistory = JSON.parse(printHistory);

        let colr = printHistory[3].substring(6);

        for (let i = 0; i < printHistory.length; i++) {

            printHistory[i] += "<br/>";
        }

        document.getElementById(`${liId}`).innerHTML = "<br/>" + printHistory + "<br/>";

        document.getElementById(`${liId}`).style.color = colr;
    }
    else {
        alert("you must enter value in all fields!");
    }
}


function clearHistory() {
    localStorage.clear();
    window.open("HTMLPage1.html");
}

var chack = true;

function showAllHistory() {
    if (chack) {

        for (let i = 0; i < localStorage.length; i++) {

            if (i != 1) {

                var oldHistory = localStorage.getItem(i + "");
                oldHistory = JSON.parse(oldHistory);

                let colr = oldHistory[3].substring(6);

                for (let j = 0; j < oldHistory.length; j++) {
                    oldHistory[j] += "<br/>";
                }

                document.getElementById("history").outerHTML += `<li id='${i}'></li>`;

                document.getElementById(`${i}`).innerHTML = "<br/>" + oldHistory + "<br/>";

                document.getElementById(`${i}`).style.color = colr;
            }
        }
        chack = false;
    }
}








//var counterId = 0;

//function saveChanges() {

//    if (!window.localStorage) {
//        alert("not support!!");
//    }

//    let formArr = new Array();

//    formArr[0] = document.getElementById("fullName").value;
//    formArr[1] = document.getElementById("age").value;
//    formArr[2] = document.getElementById("date").value;
//    formArr[3] = document.getElementById("colr").value;
//    ////////////////////////////////////////////////////////////////////////////////

//    counterId = counterId ? counterId : (localStorage.length - 1);


//    localStorage.setItem("counter", ++counterId);

//    var liId = localStorage.getItem("counter");

//    if (formArr[0] != localStorage.getItem(formArr[0])) {

//        document.getElementById("history").outerHTML += `<li id='${liId}'></li>`;
//    }

//    localStorage.setItem(liId + "", JSON.stringify(formArr));

//    let printHistory = localStorage.getItem(liId + "");

//    printHistory = JSON.parse(printHistory);

//    let colr = printHistory[3];

//    for (let i = 0; i < printHistory.length; i++) {
//        printHistory[i] += "<br/>";
//    }

//    document.getElementById(`${liId}`).innerHTML = "<br/>" + printHistory + "<br/>";

//    document.getElementById(`${liId}`).style.color = colr;

//}


//function clearHistory() {
//    localStorage.clear();
//}

//var chack = true;

//function showAllHistory() {
//    if (chack) {
//        for (let i = 0; i < localStorage.length; i++) {

//            if (i != 1) {

//                ////////////////////////////////////////////////////
//                var oldHistory = localStorage.getItem(i + "");
//                oldHistory = JSON.parse(oldHistory);

//                let colr = oldHistory[3];

//                for (let j = 0; j < oldHistory.length; j++) {
//                    oldHistory[j] += "<br/>";
//                }
//                /////////////////////////////////////////////////
//                document.getElementById("history").outerHTML += `<li id='${i}'></li>`;

//                document.getElementById(`${i}`).innerHTML = "<br/>" + oldHistory + "<br/>";

//                document.getElementById(`${i}`).style.color = colr;
//            }
//        }
//        chack = false;
//    }
//}






