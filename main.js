
let currentTime = new Date()
render(currentTime)

g('#prevMonth').onclick = ()=>{
    render(new Date(currentTime.getFullYear(),currentTime.getMonth()-1))
}
g('#nextMonth').onclick = ()=>{
    render(new Date(currentTime.getFullYear(),currentTime.getMonth()+1))
}
g('#today').onclick = ()=>{
    render(new Date())
}

// 帮助函数
function g(selector){
    return document.querySelector(selector)
}
function gs(selector){
    return document.querySelectorAll(selector)
}

function render(time){
    const year = time.getFullYear()
    const month = time.getMonth() + 1

    initTime()
    generateDays()
    currentTime = time

    function initTime(){
        const time = g('#time')
        time.textContent = `${year}年${month}月`
    }
    function generateDays(){
        const 月初 = new Date(year, month-1, 1)
        const 月初星期几 = 月初.getDay()
        const 月末 = new Date(new Date(year, month, 1) - 86400 * 1000)
        const 月末几号 = 月末.getDate()
        const 月末星期几 = 月末.getDay()

        const days = g('#days')
        days.innerHTML = ''
        for (let i = 1; i < 月初星期几; i++){
            const li = document.createElement('li')
            const d = new Date(月初 - 86400 * 1000 * i)
            li.textContent = d.getDate().toString()
            days.prepend(li)
        }

        for (let i = 1; i <= 月末几号; i++){
            const li = document.createElement('li')
            li.textContent = i.toString()
            days.append(li)
        }

        for (let i = 1; 月末星期几 + i <= 7; i++){
            const li = document.createElement('li')
            li.textContent = i.toString()
            days.append(li)
        }
    }
}
