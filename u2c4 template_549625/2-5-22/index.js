// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.querySelector("#masaiForm");
  form.addEventListener("submit",function (event){
    event.preventDefault()
  

     var MatchList= JSON.parse(localStorage.getItem("Schedule"))|| [];

     var data={
       Cricketmatch:form.matchNum.value,
       CricketteamA:form.teamA.value,
       CricketteamB:form.teamB.value,
       CricketDate:form.date.value,
       CricketVenue:form.venue.value,
     }
     MatchList.push(data);
    //  console.log(data);
     localStorage.setItem("Schedule",JSON.stringify(MatchList));
     window.location.href="index.html";
  })