import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

const Login = () => {
  const [account, setAccount] = useState('')
  function handleAccountChange(event) {
    setAccount(event.target.value)
  }

  const [password, setPassword] = useState('')
  function handlePasswordChange(event) {
    setPassword(event.target.value)
  }

  const [errorMsg, setErrorMsg] = useState({
    account: {
      error: false,
      errorMessage: ''
    },
    password: {
      error: false,
      errorMessage: ''
    }
  })

  function formValidation() {
    setErrorMsg({
      account: {
        error: account.trim().length === 0,
        errorMessage: '請輸入帳號'
      },
      password: {
        error: password.trim().length === 0,
        errorMessage: '請輸入密碼'
      }
    })
    return !(account.trim().length === 0) && !(password.trim().length === 0)
  }

  function formSubmit(event) {
    event.preventDefault()
    if (formValidation()) {
      console.log('TODO - login API')
    }
  }

  function AccountErrorMessage() {
    if (errorMsg.account.error) {
      return (
        <div className="form-row__error-message">{errorMsg.account.errorMessage}</div>
      )
    } else {
      return ''
    }
  }

  function PasswordErrorMessage() {
    if (errorMsg.password.error) {
      return (
        <div className="form-row__error-message">{errorMsg.password.errorMessage}</div>
      )
    } else {
      return ''
    }
  }


  return (
    <div className='login'>
      <h1 className='login__headline'>DDTM CHAT</h1>
      <form onSubmit={formSubmit} className='login__form'>
        <div className="form-row">
          <label htmlFor="account" className="form-row__label">帳號</label>
          <input onChange={handleAccountChange} value={account} type="text" id="account" className="form-row__input" />
          <AccountErrorMessage errorMsg={errorMsg} />

        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-row__label">密碼</label>
          <input onChange={handlePasswordChange} value={password} type="password" id="password" className="form-row__input" />
          <PasswordErrorMessage />
        </div>
        <button type="submit" className="account-setting-form__submit-btn btn">
          登入
        </button>
      </form>
      <Link to="/register" className="login__register-link link">註冊</Link>
    </div>
  )
}

export default Login
