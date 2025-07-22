// 유저에게 프롬포트로 비밀번호 설정을 입력받고,
//1. 비밀번호 길이가 4에서 12글자까지만 허용, 틀리면 -> 비밀번호 길이가 맞지 않습니다.
//2. 비밀번호에 @,!,# 중 하나가 포함되어야 허용, 틀리면 -> 비밀번호에 @,!,#이 없습니다.
//3. 비밀번호 시작이 it로 해야 허용, 틀리면 -> 비밀번호 시작이 it가 아닙니다.
// 다 통과되면 올바르게 비밀번호 만들었습니다.



const password = window.prompt(`비밀번호를 설정해주십시오`);
let error = 0

if(password.length <4 ||  password.length> 12 ){window.console.log("비밀번호 길이안맞음");
    error = error + 1;
}


 if ( ! password.includes(`@`) && !password.includes(`!`) && !password.includes(`#`) ){window.console.log("비밀번호에 @,!,#가 없습니다.");
   error = error + 1; }

if ( !password.startsWith("it"))  {window.console.log("비밀번호가 it로 시작하지 않습니다");
   error = error + 1;
}


if (error !== 0) {
  console.log(error);
} else {
  console.log("올바르게 비밀번호 만들었습니다.");
}

