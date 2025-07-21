const coffe ="ice americano";

//타입.함수(a,b): boolean

coffe.includes("ice")  //역활: 글자 포함 여부, 결과값:boolean
coffe.repeat(3)  //역활: 글자n번 반복, 결과값:string
coffe.slice(0,5)  //역활:글자 0부터 4까지 돌려줌, 결과값:string
coffe.replace("i","k") //역활: 글자  i를 k로 바껴서 돌려줌 , 결과값:string
coffe.replaceAll("i","k") //역활:글자 i를 k로 모두 바꿔서 , 결과값:string
coffe.startsWith("e") //역활: 글자 e로 시작하는지 물음, 결과값:boolean
coffe.toUpperCase() //역활:대문자화,결과값:string
coffe.toLowerCase() //역활:소문자화,결과값:string
coffe.split("a") //역활: a를 기준으로 짤라서 리스트 돌려줌, 결과값:array