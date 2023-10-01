import React, { useState } from "react";
import Modal from "react-modal";
import "./Week2.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    height: "23%",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: "transparent",
    border: "none",
    backgroundColor: "white",
    border: "none",
    boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.2)",
    padding: "6px 15px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "10px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "25px",
    fontWeight: 10000,
  },
  text: {
    fontSize: "18px",
  },
};
export function Week2() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [name, setName] = useState("");
  const [message1, setMessage1] = useState("");
  const [check1, setCheck1] = useState("");

  const [nickname, setNickname] = useState("");
  const [message2, setMessage2] = useState("");
  const [check2, setCheck2] = useState("");

  const [email, setEmail] = useState("");
  const [message3, setMessage3] = useState("");
  const [check3, setCheck3] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const [password, setPassword] = useState("");
  const [message4, setMessage4] = useState("");
  const [check4, setCheck4] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(false);

  const [passwordCheck, setPasswordCheck] = useState("");
  const [message5, setMessage5] = useState("");
  const [check5, setCheck5] = useState("");

  const handleChange1 = (event) => {
    // input 값이 변경될 때마다 호출되는 이벤트 핸들러
    const newValue = event.target.value;
    setName(newValue); // 입력된 값을 inputValue state에 업데이트
  };

  const handleChange2 = (event) => {
    // input 값이 변경될 때마다 호출되는 이벤트 핸들러
    const newValue = event.target.value;
    setNickname(newValue); // 입력된 값을 inputValue state에 업데이트
  };

  const handleChange3 = (event) => {
    // input 값이 변경될 때마다 호출되는 이벤트 핸들러
    const newValue = event.target.value;
    setEmail(newValue); // 입력된 값을 inputValue state에 업데이트

    // 이메일 유효성 검사 정규 표현식
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // 입력된 값이 이메일 형식과 일치하는지 검사
    setIsValidEmail(emailPattern.test(newValue));
  };

  const handleChange4 = (event) => {
    // input 값이 변경될 때마다 호출되는 이벤트 핸들러
    const newValue = event.target.value;
    setPassword(newValue); // 입력된 값을 inputValue state에 업데이트

    // 영어 문자, 숫자, 특수 문자 조합 검사 정규 표현식
    const passwordPattern =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;

    // 입력된 값이 조건을 만족하는지 검사
    setIsValidPassword(passwordPattern.test(newValue));
  };

  const handleChange5 = (event) => {
    // input 값이 변경될 때마다 호출되는 이벤트 핸들러
    const newValue = event.target.value;
    setPasswordCheck(newValue); // 입력된 값을 inputValue state에 업데이트
  };

  const nameCheck = () => {
    if (name == "") {
      setCheck1("fail");
      setMessage1("필수 입력 항목입니다!");
    } else {
      setCheck1("success");
      setMessage1("멋진 이름이네요!");
    }
  };

  const nicknameCheck = () => {
    if (nickname.length > 5 || nickname.length < 2) {
      setCheck2("fail");
      setMessage2("닉네임은 2~5글자로 구성해주세요!");
    } else {
      setCheck2("success");
      setMessage2("멋진 닉네임이군요!");
    }
  };

  const emailCheck = () => {
    if (!isValidEmail) {
      setCheck3("fail");
      setMessage3("올바른 메일 형식이 아닙니다");
    } else {
      setCheck3("success");
      setMessage3("올바른 메일 형식입니다!");
    }
  };

  const pwCheck = () => {
    if (isValidPassword) {
      setCheck4("success");
      setMessage4("안전한 비밀번호입니다!");
    } else {
      setCheck4("fail");
      setMessage4("영어+숫자+특수문자를 조합하여 작성해주세요.");
    }
  };

  const pwckCheck = () => {
    if (passwordCheck !== password) {
      setCheck5("fail");
      setMessage5("비밀번호가 일치하지 않습니다.");
    } else {
      setCheck5("success");
      setMessage5("비밀번호가 일치합니다.");
    }
  };

  const handleButtonClick = () => {
    // 모든 check 상태값이 "success"인지 확인
    if (setIsButtonActive) {
      // 버튼 동작 수행
      setIsButtonActive(true);

      openModal();
    } else {
      alert("입력을 완료해주세요.");
    }
  };

  const buttonClass = `buttonWrap2 ${isButtonActive ? "active" : ""}`;

  const handleClick = () => {
    nameCheck();
    if (email) {
      emailCheck();
    }
    if (nickname) {
      nicknameCheck();
    }

    if (password) {
      pwCheck();
    }

    if (passwordCheck) {
      pwckCheck();
    }
    if (
      check1 === "success" &&
      check2 === "success" &&
      check3 === "success" &&
      check4 === "success" &&
      check5 === "success"
    ) {
      // 버튼 동작 수행
      setIsButtonActive(true);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div onClick={handleClick} className="backgroundimg">
      <div className="boxWrap2">
        <div className="header2">
          <div className="loginText">회원가입</div>
          <div className="line1" />
        </div>
        <div className="contextWrap2">
          <div className="inputWrap2">
            <div className="inputContainer">
              <label for="name">이름</label>
              <input
                value={name}
                onChange={handleChange1}
                id="name"
                type="text"
              />
              <span id={check1}>{message1}</span>
            </div>

            <div className="inputContainer">
              <label for="nickname">닉네임</label>
              <input
                value={nickname}
                onChange={handleChange2}
                className="nickname"
                type="text"
              />

              <span id={check2}>{message2}</span>
            </div>
            <div className="inputContainer">
              <label for="email">이메일</label>
              <input
                value={email}
                onChange={handleChange3}
                className="email"
                type="email"
              />
              <span id={check3}>{message3}</span>
            </div>
            <div className="inputContainer">
              <label for="password">비밀번호</label>
              <input
                value={password}
                onChange={handleChange4}
                className="password"
                type="password"
              />
              <span id={check4}>{message4}</span>
            </div>
            <div className="inputContainer">
              <label for="passwordCheck">비밀번호 확인</label>
              <input
                value={passwordCheck}
                onChange={handleChange5}
                className="passwordCheck"
                type="password"
              />
              <span id={check5}>{message5}</span>
            </div>
          </div>
          <div className={buttonClass}>
            <button onClick={handleButtonClick} className="buttonstyle2">
              가입하기
            </button>

            <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <h2 style={customStyles.title}>가입 성공!</h2>
              <p style={customStyles.text}>umc 챌린저 가입을 축하합니다!</p>
              <button style={customStyles.closeButton} onClick={closeModal}>
                닫기
              </button>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week2;
