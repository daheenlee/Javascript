const cm = window.prompt("정사각형 한 변의 길이는?")
const long = Number(cm) * Number(cm)
window.alert(`한 변의 길이 ${cm}인 정사각형의 넓이 : ${long}`)


const down = window.prompt("삼각형 밑변의 길이는?")
const height = window.prompt("삼각형 높이의 길이는?")
const triangle = Number(down) * Number(height) / 2
window.alert(`밑 변 ${down}과 높이${height}의 삼각형의 넓이: ${triangle}`)


const trip = window.prompt("원화를 입력해주세요")
const japan = Number(trip) * Number(9.33) / 100
window.alert(`${trip}원은 ${japan}엔 입니다!`)


const key = window.prompt("당신의 키는 몇cm입니까?")
const weight = window.prompt("당신의 몸무게는 몇 kg입니까?")
const BMI = Number(weight) / (Number(key) * Number(key))
window.alert(`키:${key} 몸무게:${weight} BMI:${BMI}`)


const bun = window.prompt("몇분입니까?")
const sec = Number(bun) * 60
window.alert(`결과: 분: ${bun} 초: ${sec}`)






