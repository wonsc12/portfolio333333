let years,months,dates,days,hours,minutes,sec;

let dayList = [ "일","월","화","수","목","금","토"];

let twohours;

let twomin;

let twosec;

setInterval(function(){

    let testDate = new Date()

    years = testDate.getFullYear();

    months = testDate.getMonth() +1 ;

    dates = testDate.getDate();

    days = testDate.getDay();

    hours = testDate.getHours();

    minutes = testDate.getMinutes();

    sec = testDate.getSeconds();

    if(hours >=0){

        twohours = hours;
    }
    else{

        twohours = "0" + hours;
    }

    if(minutes >= 10){

        twomin = minutes;
    }
    else{
        twomin = "0" + minutes;
    }
    if(sec >=10 ){

        twosec = sec;
    }
    else {

        twosec = "0" +sec;
    }
    document.querySelector(".year").innerHTML = years + "년";
    document.querySelector(".month").innerHTML = months + "월";
    document.querySelector(".date").innerHTML = dates + "일";
    document.querySelector(".day").innerHTML = dayList[days] + "요일";
    document.querySelector(".hours").innerHTML = twohours + "시";
    document.querySelector(".minutes").innerHTML = twomin + "분";
    document.querySelector(".seconds").innerHTML = twosec + "초";

},1000)


    let checkDate = new Date();
    let hr = checkDate.getHours();

    console.log(hr);

    