
//Get stories from api
let storiesButton = document.querySelector("#topButton");
let askButton = document.querySelector("#askButton");
let jobsButton = document.querySelector("#jobsButton");
let commentsButton = document.querySelector("#commentsButton");


let headline = document.querySelector("#headline");
let source = document.querySelector("#source");
let score = document.querySelector("#score");
let author = document.querySelector("#author");
// let storyIds = []
// let storyLinks = []
// let storyScores = []
// let asks = [];
// let jobs = [];


let getStories = async() => {
    let response = await fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`));
    let data = await response.json();
    for (let i = 0; i<100; i++){
        fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/item/${data[i]}.json?print=pretty`))
    .then(function(response2){
        return response2.json(); })
    .then(function(data){ 
        let listParent = $("#parent");
        let newLI = $(`<li id='headline' ><a href='${data.url}' target = '_blank' style = "color: darkblue">${data.title} - by: ${data.by}</a></li>`);
        let newP = $(`<p id='scoreLine'><a href="https://news.ycombinator.com/item?id=${data.id}" target = '_blank' style = "color: gray"> ${data.score} points - ${data.descendants} comments</a></p>`)
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
            let newLI = $(`<li id='headline' style = "color: darkblue" >${data.title} - by: ${data.by}</li>`);
            let newP = $(`<p id='text'> ${data.text}</p>`)
            let newP2 = $(`<p id='scoreLine'><a href="https://news.ycombinator.com/item?id=${data.id}" target = '_blank' style = "color: gray"> ${data.score} points - ${data.descendants} comments</a></p>`)
            listParent.append(newLI);
            listParent.append(newP);
            listParent.append(newP2);
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
            let newLI = $(`<li id='headline' ><a href='${data.url}' target = '_blank' style = "color: darkblue" >${data.title} - by: ${data.by}</a></li>`);
            listParent.append(newLI);
        })}}

 let getComments = async(id) => {
    console.log(1)
    $("#parent").empty();
    let response = await fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`));
    let data = await response.json();
    console.log(2)
    console.log(data)
    for (let i = 0; i<data.kids.length; i++){
        fetch(encodeURI(`https://hacker-news.firebaseio.com/v0/item/${data.kids[i]}.json?print=pretty`))
        .then(function(response2){
            return response2.json();})
        .then(function(data2){ 
            console.log("Pulling Comments");
            console.log(data2);
            let listParent = $("#parent");
            let newP = $(`<p id='comments'> >> ${data2.by} - ${data2.text}</p>`)
            let newP2 = $(`<p id='comments' onclick = getComments(${data2.id})>${data2.kids.length} sub-comments</a></p>`)
            listParent.append(newP);
            listParent.append(newP2);
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

function goToComments(id){

}


    
    
    













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








