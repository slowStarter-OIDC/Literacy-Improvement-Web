import React from "react";
import { useMutation } from "react-query";
import { fetchLogout } from "../../../pages/api/fetchLogout";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import Button from "../Button/Button";
import { logoutUser } from "../../../store/modules/authSlice";



export default function Logout() {
  const userID = useSelector((state) => state.authSlice.email)
  const dispatch = useDispatch()

  const router = useRouter();
  const mutation = useMutation(() => {
    dispatch(logoutUser())
    alert("로그아웃 되었습니다.")

    return fetchLogout(userID)
  })

  const clickLogout = () => {
    mutation.mutate()
  }


  return (
    <div>
      <Button label="로그아웃" onClick={() => clickLogout()}></Button>
    </div>
  )
}
