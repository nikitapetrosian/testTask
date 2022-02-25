let data = prompt('Введите дату в формате "ДД.ММ.ГГГГ"')

const getDayInfo = (data) => {
    let newDate = data.split('.')
    let weekDay = new Date(`${newDate[2]}-${newDate[1]}-${newDate[0]}`)
    let options = { weekday: 'long' }
    let RealWeekday = new Intl.DateTimeFormat('ru-RU', options).format(weekDay)
    let numberWeek
    if (Number(newDate[0]) <= 7) {
        numberWeek = 1
    }
    else if (7 < Number(newDate[0]) <= 14) {
        numberWeek = 2
    }
    else if (14 < Number(newDate[0]) <= 21) {
        numberWeek = 3
    }
    else {
        numberWeek = 4
    }
    let month = weekDay.toLocaleString('default', { month: 'long' });
    let arrMonth = month.split('')
    let updateMonth = ''
    if (arrMonth[arrMonth.length - 1] != 'т') {
        arrMonth[arrMonth.length - 1] = 'я'
    } else if (arrMonth[arrMonth.length - 1] === 'т') {
        arrMonth[arrMonth.length - 1] = 'та'
    }
    updateMonth = arrMonth.join('')
    alert(`${RealWeekday}, ${numberWeek} неделя ${updateMonth}, ${newDate[2]} года`)

}
getDayInfo(data)

