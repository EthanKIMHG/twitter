import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../../firebaseApp";
import { toast } from "react-toastify";

interface SignupUserInfo {
  email: string;
  password: string;
  passwordConfirm: string;
}

const initialInfo: SignupUserInfo = {
  email: "",
  password: "",
  passwordConfirm: ""
}

export default function SignupForm () {
  const [userInfo, setUserInfo] = useState<SignupUserInfo>(initialInfo);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      await createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password);
      toast.success("회원가입이 성공적으로 완료 되었습니다.")
      navigate("/login")
    } catch(e) {
      console.log(e);
      toast.error("회원가입에 실패하였습니다..")
    }
  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserInfo((prev) => {
      if (name === "email") {
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/
        if (!regex.test(value)) {
          setError("올바른 이메일 형식을 입력해 주세요")
        } else {
          setError("")
        }
        return {
          ...prev,
          email: value
        }
      } else if (name === "password") {
        if (value.length < 8) {
          setError("비밀번호는 8자리 이상으로 입력해주세요")
        } else {
          setError("")
        }
        return {
          ...prev,
          password: value
        }
      } else {
        if (value !== prev.password) {
          setError("비밀번호와 동일하게 입력해 주세요")
        } else if (value.length < 8) {
          setError("비밀번호는 8자리 이상으로 입력해주세요")
        } else {
          setError("")
        }
        return {
          ...prev,
          passwordConfirm: value
        }
      }
    })
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form_title">회원가입</div>
      <div className="form__block">
        <label htmlFor="email">이메일</label>
        <input type="text" required name="email" id="email" onChange={onChange}/>
      </div>
      <div className="form__block">
        <label htmlFor="password">비밀번호</label>
        <input type="password" required name="password" id="password" onChange={onChange} />
      </div>
      <div className="form__block">
        <label htmlFor="password_confirm">비밀번호 확인</label>
        <input type="password" required name="password_confirm" id="password_confirm" onChange={onChange}/>
      </div>
      {/** error */}
      {error && error.length > 0 &&
      <div className="form__block">
        <div className="form__error">{error}</div>
      </div>}
      <div className="form__block">
        계정이 있으신가요?
        <Link to="/login" className="form__link">로그인 하러 가기</Link>
      </div>
      <div className="form__block">
        <button type="submit" className="form__button-submit" disabled={error?.length > 0}>회원가입</button>
      </div>
    </form>
  )
} 