//const a = 1 //숫자
//const b = "1"


//const a1 = Number("100") + 20 //120
//const a2 = Numver("1004") + Number(10) //1014

//const b1 = string(100) + "10" //10010
//const b2 = string(13) + "14" //1314

//window.console.log(`결과 ${a1}`)
//window.console.log(`결과 ${a2}`)
//window.console.log(`결과 ${b1}`)
//window.console.log(`결과 ${b2}`)



const number_first = window.prompt("첫번째 숫자를 알려주세요")
const number_second = window.prompt("두번째 숫자를 알려주세요")



const numberring = Number(number_first) + Number(number_second)

window.alert(`결과 ${numberring}`)

const born = window.prompt("나이를 알려주세요")

const age = Number(2026) - Number(born)
window.alert(`귀하의 태어난 년도는 ${age}입니다!`)

