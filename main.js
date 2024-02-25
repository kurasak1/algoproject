let question_field = document.querySelector('.queston')


let answer_buttons = document.querySelectorAll('.answer')


class Question{
    constructor(question,answer_1,answer_2,correct,answer_4,answer_5){
        this.question = question
        this.correct = correct
        this.answers = [
            answer_1,
            answer_2,
            this.correct,
            answer_4,
            answer_5,
        ]
    }
    display (){
        question_field.innerHTML = this.question
        for (let i = 0; i < this.answers.length; i += 1){
            answer_buttons[i].innerHTML = this.answers[i]
        }
    }
}

current_questions = [
    new Question('2+2','6','4','8','10','3'),
    new Question('2+3','6','5','11','10','3'),
    new Question('4+5','6','9','8','10','3')
]

let total_answer = 0

let current_question = current_questions[total_answer]
current_question.display()

for (let i = 0; i < answer_buttons.length; i += 1){
    answer_buttons[i].addEventListener('click',function(){
        if (answer_buttons[i].innerHTML == current_question.correct){
            console.log('Ты верно ответил')
        } else{
            console.log('Не верно подумай в следующий раз')
        }
        total_answer += 1
        current_question = current_questions[total_answer]
        current_question.display()
    })
}