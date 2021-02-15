const color = 'black'

switch(color){
    case 'white':
        console.log("It's White.");
        break;
    case 'blue':
        console.log("It's Red.");
        break;
    default:
        console.log("It's not White and Red.");
        break;
}


let month;

switch(new Date().getMonth()){
    case 0:
        month = 'January';
        break;
    case 1:
        month = 'Febuary';
        break;
    case 2:
        month = 'March';
        break;
    case 3:
        month = 'April';
        break;
    case 4:
        month = 'May';
        break;
    case 5:
        month = 'June';
        break;
    case 6:
        month = 'July';
        break;
    case 7:
        month = 'August';
        break;
    case 8:
        month = 'September';
        break;
    case 9:
        month = 'October';
        break;
    case 10:
        month = 'November';
        break;
    case 11:
        month = 'December';
        break;
}

console.log(`Current month is ${month}.`);