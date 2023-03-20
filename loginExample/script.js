const checkMember = () => {
  const nameCheck = document.getElementById("name");
  const emailCheck = document.getElementById("email");
  const pwdCheck = document.getElementById("pwd");
  const pwdCheck2 = document.getElementById("pwdcheck");
  const checkbox = document.getElementById("check");
  var n = nameCheck.value;
  var s = pwdCheck.value;
  var exptext = /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (nameCheck.value.length == 0) {
    alert("이름을 입력해주세요");
    nameCheck.focus();
    return false;
  } else if (n.length <= 1 || n.length >= 7) {
    alert("이름을 2~6글자 사이로 입력해주세요");
    nameCheck.focus();
    return false;
  } else if (emailCheck.value.length == 0) {
    alert("이메일을 입력해주세요");
    emailCheck.focus();
    return false;
  } else if (!exptext.test(emailCheck.value)) {
    alert("이메일형식이 올바르지 않습니다.");
    emailCheck.focus();
    return false;
  } else if (pwdCheck.value.length == 0) {
    alert("비밀번호를 입력해주세요");
    pwdCheck.focus();
    return false;
  } else if (pwdCheck2.value.length == 0) {
    alert("비밀번호 확인을 입력해주세요");
    pwdCheck2.focus();
    return false;
  } else if (s.length <= 5 || s.length >= 9) {
    alert("비밀번호를 6~8글자 사이로 입력해주세요");
    pwdCheck.focus();
    return false;
  } else if (pwdCheck.value != pwdCheck2.value) {
    alert("비밀번호와 비밀번호 확인이 다릅니다.");
    pwdCheck2.focus();
    return false;
  } else if (checkbox.checked == false) {
    alert("이용약관에 동의 해주세요");
    return false;
  } else {
    alert("회원가입 성공!");
    nameCheck.value = "";
    emailCheck.value = "";
    pwdCheck.value = "";
    pwdCheck2.value = "";
    checkbox.checked = false;
    return true;
  }
};

const checkLogin = () => {
  const emailCheck = document.getElementById("email");
  const pwdCheck = document.getElementById("pwd");
  var s = pwdCheck.value;
  var exptext = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  if (emailCheck.value.length == 0) {
    alert("이메일을 입력해주세요");
    emailCheck.focus();
    return false;
  } else if (!exptext.test(emailCheck.value)) {
    alert("이메일형식이 올바르지 않습니다.");
    emailCheck.focus();
    return false;
  } else if (pwdCheck.value.length == 0) {
    alert("비밀번호를 입력해주세요");
    pwdCheck.focus();
    return false;
  } else if (s.length <= 5 || s.length >= 9) {
    alert("비밀번호를 6~8글자 사이로 입력해주세요");
    pwdCheck.focus();
    return false;
  } else {
    alert("어서오세요 반갑습니다.");
    emailCheck.value = "";
    pwdCheck.value = "";
    return true;
  }
};
