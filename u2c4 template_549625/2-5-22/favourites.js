// write js code here corresponding to favourites.html
var favouriteArr=JSON.parse(localStorage.getItem("favourites"))||[];

displaydata(favouriteArr)

function displaydata(data){

    data.forEach(function(ele,i) {

        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        td1.innerText=ele.Cricketmatch

        const td2 = document.createElement('td');
        td2.innerText=ele.CricketteamA

        const td3 = document.createElement('td');
        td3.innerText=ele.CricketteamB;

        const td4 = document.createElement('td');
        td4.innerText=ele.CricketData;

        const td5 = document.createElement('td');
        td5.innerText=ele.CricketVenue;

        const td6 = document.createElement('td');
        td6.innerText="Delete"
        td6.style.color="red"
        td6.addEventListener("click",function(){
            DeleteMatch(ele,i)
        })

        tr.append(td1,td2,td3,td4,td5,td6)

        document.querySelector("tbody").append(tr)
        
    });
}

function DeleteMatch(ele,i){
    favouriteArr.splice(i,1);
    // ele.paren
    localStorage.setItem("favourites",JSON.stringify(favouriteArr));
    window.location.reload();
}