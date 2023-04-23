import React from 'react';
import Button from "antd/lib/button";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/slices/authSlice";

const LogoutBtn = () => {
  const dispatch = useAppDispatch()

  const handler = () => {
    dispatch(logout())
  }
  return (
    <Button
      onClick={() => handler()}
      type="text"
      danger
    >
      Выйти из профиля
    </Button>
  );
};

export default LogoutBtn;
