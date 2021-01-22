const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    }, {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    }, {
        question:'Who is the president of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b' 
    }, {
        question:'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Stylesheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminal Motorboats Lamborginis',
        correct: 'a'
    }, {
        question: 'what year was javascript launch?',
        a:'1994',
        b: '1995',
        c: '1996',
        d: 'None',
        correct: 'd'
    }
];

const questionEl = document.getElementById('question'); 
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sunbmitBtn = document.getElementById('Submit');


let currentQuiz = 0;
let score = 0;
const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');  //Radio buttons

loadQuiz();

function loadQuiz()
{
    deSelectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;           //these are texts
    d_text.innerText = currentQuizData.d;


}
function getSelected() {
   let answer = undefined;
    answerEls.forEach((answerEl) => {
           if(answerEl.checked){
               answer = answerEl.id; 
           }
        }
    );

    return answer;
}

function deSelectAnswers() 
{
    answerEls.forEach((answerEl) => 
    {
        answerEl.checked = false;

    });
}    

sunbmitBtn.addEventListener("click", () => 
{
    const answer = getSelected();
    if(answer) 
    {
        if(answer === quizData[currentQuiz].correct)
        { 
            score++; 
        }
        currentQuiz++;
        
        if(currentQuiz < quizData.length)
        {
             loadQuiz();
        }

        else
        {
            quiz.innerHTML = `<h2>You answered ${score} / ${quizData.length} questions.</h2> 
            <button onclick = location.reload()>Reload</button>`
        }
    

    }
});


    
