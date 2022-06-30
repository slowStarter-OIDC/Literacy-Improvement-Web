import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import LoginModal from "../Modal/LoginModal";
import { getCookie, checkCookies } from 'cookies-next';
import { loginUser } from '../../../store/modules/authSlice';

export default function LoginCheck() {
  const dispatch = useDispatch()
  const isLogin = useSelector((state) => state.authSlice.isLogin)
  const [showModal, setShowModal] = useState(isLogin)

  useEffect(() => {
    if (checkCookies('userID') === true) {
      const token = getCookie('userID');
      dispatch(loginUser(token))
    }
  }, [isLogin])


  return (
    <div>
      <LoginModal
        onClose={() => setShowModal(true)}
        show={!isLogin}
        // show={false}
        maskClosable={true}
      >
      </LoginModal>
    </div>
  )
}

export const getServerSideProps = ({ req, res }) => {

  return { props: {} };
}