import "./Week1.css";

export function Week1() {
  return (
    <div className="backgroundimg">
      <div className="boxWrap">
        <div className="header">
          <div className="loginText">로그인</div>
          <div className="line1" />
        </div>
        <div className="contextWrap">
          <div className="inputWrap">
            <input className="id" placeholder="아이디" type="text" />
            <input className="id" placeholder="비밀번호" type="password" />
          </div>
          <div className="buttonWrap">
            <button className="buttonstyle">로그인</button>
          </div>
          <div className="footer">
            <a href="#">회원가입</a>
            <div>|</div>
            <a href="#">아이디/비밀번호 찾기</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Week1;
