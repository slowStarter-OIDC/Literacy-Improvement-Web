import KakaoLoginBtn from "../components/atom/kakaoButton/kakaoLoginBtn.js";

export default function Login() {

  return (
    <div className="container">
      <div>
        <h2>로그인</h2>
      </div>
      <div>
        <KakaoLoginBtn></KakaoLoginBtn>
      </div>
    </div>
  )
}