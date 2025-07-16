const jungsu = +window.prompt("각도 입력해주세요")

if (0 < jungsu && jungsu < 90) { window.alert(`예각입니다`) }

else if (jungsu == 90) { window.alert(`직각입니다`) }
else if (90 < jungsu > 180) { window.alert(`둔각입니다`) }
else if (jungsu <= 180) { window.alert(`평각입니다`) }


const has100up = (korea == 100 || math == 100 || english == 100); { window.alert(`Good!`) }
const has100down = (korea <= 60 || math <= 60 || english <= 60); { window.alert(`BAd`) }

const korea = +window.prompt("국어점수 입력")
const english = +window.prompt("영어점수 입력")
const math = +window.prompt("수학점수 입력")
const grade = (korea + english + math / 3)
if (grade >= 90) { window.alert(`A등급`) }
else if (grade >= 80 && grade < 90) { window.alert(`B등급`) }
else { window.alert(`C등급`) }


if (has100up) { window.alert("GOOD"); }
if (has100down) { window.alert("BAD"); }