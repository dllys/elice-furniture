console.log("hihih")
const joinBtn = document.getElementById("search_zipcode");
const joinSubmitBtn = document.getElementsByClassName("btn_join")[0];
const joinModal = document.getElementById("register_success");

// 값 가져오기
const joinNameInput = document.getElementById("name");
const joinEmailInput = document.getElementById("email");
const joinPhoneInput1 = document.getElementById("phone1");
const joinPhoneInput2 = document.getElementById("phone2");
const joinPhoneInput3 = document.getElementById("phone3");
const joinZipcodeInput = document.getElementById("zipcode");
const joinAddrInput1 = document.getElementById("addr1");
const joinAddrInput2 = document.getElementById("addr2");

const goToLogin = document.getElementsByClassName("btn_welcome")[0];

// 휴대전화 input 자동 focus
joinPhoneInput1.addEventListener("input", function () {
    if (joinPhoneInput1.value.length >= joinPhoneInput1.maxLength) {
        joinPhoneInput2.focus();
    }
});
joinPhoneInput2.addEventListener("input", function () {
    if (joinPhoneInput2.value.length >= joinPhoneInput2.maxLength) {
        joinPhoneInput3.focus();
    }
});

// 주소 검색 api
joinBtn.addEventListener("click", () => {
    new daum.Postcode({
        oncomplete: function (data) {
            let addr = ""; // 주소 변수
            let extraAddr = ""; // 참고항목 변수

            if (data.userSelectedType === "R") {
                addr = data.roadAddress;
            } else {
                addr = data.jibunAddress;
            }

            if (data.userSelectedType === "R") {
                if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
                    extraAddr += data.bname;
                }

                if (data.buildingName !== "" && data.apartment === "Y") {
                    extraAddr +=
                        extraAddr !== ""
                            ? ", " + data.buildingName
                            : data.buildingName;
                }

                if (extraAddr !== "") {
                    extraAddr = " (" + extraAddr + ")";
                }
            } else {
                joinAddrInput2.value = "";
            }

            joinZipcodeInput.value = data.zonecode;
            joinAddrInput1.value = addr;
            joinAddrInput2.focus();
        },
    }).open();
});

joinSubmitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    if (joinNameInput.value == '') {
        alert('❗️이름을 입력해 주세요.');
        joinNameInput.focus();
        return;
    }

    // 회원가입 완료 모달창 띄우기
    joinModal.style.display = "flex";
    document.getElementsByClassName(
        "welcome_user_name"
    )[0].innerText += `${joinNameInput.value}님 `;

    goToLogin.addEventListener("click", () => {
        window.location.href = "../html/login.html";
    })
}
