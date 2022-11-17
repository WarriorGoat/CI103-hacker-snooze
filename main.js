
//Get stories from api
let storiesButton = document.querySelector("#topButton");
let askButton = document.querySelector("#askButton");
let jobsButton = document.querySelector("#jobsButton");


let headline = document.querySelector("#headline");
let source = document.querySelector("#source");
let score = document.querySelector("#score");
let author = document.querySelector("#author");
let storyIds = []
let storyLinks = []
let storyScores = []
let asks = [];
let jobs = [];


let getStories = async() => {
    let response = await fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`));
    let data = await response.json();
    for (let i = 0; i<100; i++){
        fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`))
    .then(function(response2){
        return response2.json(); })
    .then(function(data){ 
        let listParent = $("#parent");
        let newLI = $(`<li id='headline' ><a href='${data.url}' target = '_blank' >${data.title} - by: ${data.by}</a></li>`);
        let newP = $(`<p id='scoreLine'> ${data.score} points - ${data.descendants} comments</p>`)
        listParent.append(newLI);
        listParent.append(newP);
    })}}


let getAsks = async() => {
    let response = await fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`));
    let data = await response.json();
    for (let i = 0; i<50; i++){
        fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`))
        .then(function(response2){
            return response2.json(); })
        .then(function(data){ 
            let listParent = $("#parent");
            let newLI = $(`<li id='headline' >${data.title} - by: ${data.by}</li>`);
            let newP = $(`<p id='scoreLine'> ${data.score} points - ${data.descendants} comments</p>`)
            listParent.append(newLI);
            listParent.append(newP);
        })}}


let getJobs = async() => {
    let response = await fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`));
    let data = await response.json();
    for (let i = 0; i<50; i++){
        fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`))
        .then(function(response2){
            return response2.json(); })
        .then(function(data){ 
            let listParent = $("#parent");
            let newLI = $(`<li id='headline' ><a href='${data.url}' target = '_blank' >${data.title} - by: ${data.by}</a></li>`);
            listParent.append(newLI);
        })}}


getStories();

storiesButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Stories Clicked");
    $("#parent").empty();
    getStories();
})

askButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Asks Clicked");
    $("#parent").empty();
    getAsks();
})

jobsButton.addEventListener("click", function(event){
    event.preventDefault();
    console.log("Jobs Clicked");
    $("#parent").empty();
    getJobs();
})





    
    
    













// function getStories(){
//     fetch (encodeURI(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`))
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         for (let i = 0; i<100; i++){
//         stories.push(data[i]);}
//     })
//     console.log(stories)}


// function getAsks(){
//     fetch (encodeURI(`https://hacker-news.firebaseio.com/v0/askstories.json?print=pretty`))
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         for (let i = 0; i<100; i++){
//         asks.push(data[i]);}
//     })
//     console.log(asks)}


// function getJobs(){
//     fetch (encodeURI(`https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty`))
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         for (let i = 0; i<100; i++){
//         jobs.push(data[i]);}
//     })
//     console.log(jobs)}








