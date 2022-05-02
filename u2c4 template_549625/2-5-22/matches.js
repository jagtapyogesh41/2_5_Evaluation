// write js code here corresponding to matches.html
var MatchList=JSON.parse(localStorage.getItem("Schedule"));


var favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[];

displaydata(MatchList)

function SortByVenue(){
    const shorted = document.querySelector('#filterVenue').value;

    var filterlist=MatchList.filter(function (ele){
        return (ele.CricketVenue == shorted);
    })
    displaydata(filterlist)
}

function displaydata(data){
    document.querySelector('tbody').innerHTML = ""

  data.forEach(function (ele) {
    
    const box = document.createElement('tr');

    const td1 = document.createElement('td');
    td1.innerText=ele.Cricketmatch;
    
    const td2 = document.createElement('td');
    td2.innerText=ele.CricketteamA;

    const td3 = document.createElement('td');
    td3.innerText=ele.CricketteamB;

    const td4 = document.createElement('td');
    td4.innerText=ele.CricketDate;

    const td5 = document.createElement('td');
    td5.innerText=ele.CricketVenue;

    const td6 = document.createElement('td');
    td6.innerText="Favoutrie";
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
        favouriteFun(ele)
        // alert("click")
    })
    

    box.append(td1,td2,td3,td4,td5,td6);

    document.querySelector("tbody").append(box)
  });

  
}

function favouriteFun(ele){
    favouriteArr.push(ele);

    localStorage.setItem("favourites",JSON.stringify(favouriteArr))
}



