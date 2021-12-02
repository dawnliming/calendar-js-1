// 帮助函数
function g(selector){
    return document.querySelector(selector)
}
function gs(selector){
    return document.querySelectorAll(selector)
}

// 初始化
// time
const time = g('#time')
const now = new Date()
const year = now.getFullYear()
const month = now.getMonth() + 1
time.textContent = `${year}年${month}月`
// days
const 月初 = new Date(year, month-1, 1)
const 月初星期几 = 月初.getDay()
const 月末 = new Date(new Date(year, month, 1) - 86400 * 1000)
const 月末几号 = 月末.getDate()
const 月末星期几 = 月末.getDay()

// 铺垫上个月
const days = g('#days')
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

// 铺垫下个月
for (let i = 1; 月末星期几 + i <= 7; i++){
    const li = document.createElement('li')
    li.textContent = i.toString()
    days.append(li)
}

