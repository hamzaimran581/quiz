var questions = [{
    id: 1,
    question: "Who is the richest man of the world?",
    answer: "Jeff Bezoz",
    options: [
        "Ali mughal",
        "Ghous Ahmed",
        "Basit Ahmed",
        "Jeff Bezoz"
    ]
},
{
    id: 2,
    question: "Who is the best teacher of Saylani Mass IT training program?",
    answer: "All",
    options: [
        "Basit Ahmed",
        "Ali mughal",
        "Basit Ahmed",
        "All"
    ]
},
{
    id: 3,
    question: "Who is the Prime minister of Pakistan?",
    answer: "Imran Khan",
    options: [
        "Shebaz Sharif",
        "Imran Khan",
        "Waqar Zaka",
        "Babar Azam"
    ]
},
{
    id: 4,
    question: "Who is the top batsman of Pakistan in terms of ranking?",
    answer: "Babar Azam",
    options: [
        "Ahmed Shahzad",
        "Abid Ali",
        "Babar Azam",
        "Imran Ul Haq"
    ]
},
{
    id: 5,
    question: "Who is the founder of Bangladesh",
    answer: "Zulfiqar Ali Bhutto",
    options: [
        "Mujibur Rehman",
        "Narindra Modi",
        "Zulfiqar Ali Bhutto",
        "Muhammad Ali jinnah"
    ]
},
{
    id: 6,
    question: "Which is the most highly paid programming language in the world",
    answer: "Python",
    options: [
        "Javascript",
        "Python",
        "C++",
        "java"
    ]
},
{
    id: 7,
    question: "Which social media platform has highest number of users",
    answer: "Facebook",
    options: [
        "Facebook",
        "Instagram",
        "Wechat",
        "Twitter"
    ]
},
{
    id: 8,
    question: "Who is the first governor general of pakistan",
    answer: "Zulfiqar Ali Bhutto",
    options: [
        "Muhammad Ali Jinnah",
        "Liaquat Ali Khan",
        "Sir Syed Ahmed Khan",
        "Sir Adamjee"
    ]
}
]

window.onload = sawaljawab(0) 
var a = 0;
function COunter() {
    a++
    sawaljawab(a)
}

function sawaljawab(e) {
    var ques = document.getElementById("ques")
    ques.innerHTML = `<p> ${questions[e].question}</p> 
    <ul> 
          <input type="checkbox" id=op1> <label for="op1">${questions[e].options[0]} </label> <br>
          <input type="checkbox" id=op2> <label for="op2">${questions[e].options[1]} </label> <br>
          <input type="checkbox" id=op3> <label for="op3">${questions[e].options[2]} </label> <br>
          <input type="checkbox" id=op4> <label for="op4">${questions[e].options[3]} </label> <br>
    </ul>`

}
sawaljawab()