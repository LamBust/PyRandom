let para = document.querySelector("p")
let anses = document.querySelector("select")
let btn = document.querySelector(".button1")
let mistake = document.querySelector(".warning")
let o1 = document.querySelector(".fs")
let o2 = document.querySelector(".sn")
let o3 = document.querySelector(".td")
let o4 = document.querySelector(".ft")
let anss = document.querySelector("ol")

var answered = 0

para.textContent = "Какие значения может вернуть функция randint(0, 5)?"
o1.textContent = "1, 2, 3, 4"
o2.textContent = "0, 1, 2, 3, 4, 5"
o3.textContent = "0, 1, 2, 3, 4"
o4.textContent = "1, 2, 3, 4, 5"

function ans(){
    let chosen = anses.value
    if (chosen == "n"){
        mistake.textContent = "Выберите ответ"
        return
    }
    else if (answered == 0 & chosen == 2){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = "Какая функция позволяет создать спискок рандомных чисел длиной n"
        o1.textContent = "randrange(n)"
        o2.textContent = "randlist(n)"
        o3.textContent = "rangerandint(n)"
        o4.textContent = "randomlist(n)"
    }
    else if (answered == 1 & chosen == 1){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = "В какой сортировке может использоваться randint?"
        o1.textContent = "Insertion Sort"
        o2.textContent = "Bubble Sort"
        o3.textContent = "Merge Sort"
        o4.textContent = "Quick Sort"
    }
    else if (answered == 2 & chosen == 4){
        mistake.textContent = "Верный ответ"
        ++answered
        para.textContent = ("Вопросов больше нет!")
        anss.remove()
    }
    else if (answered != 3){
        mistake.textContent = "Вы ответили неверно, попробуйте ещё раз"
    }
}

btn.addEventListener("click", ans);