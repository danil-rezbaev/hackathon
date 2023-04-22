import { MenuProps } from "antd";
import LogoutBtn from "../../components/LogoutBtn";

export const items: MenuProps['items'] = [
  {
    key: 'edit',
    label: "Редактировать профиль"
  },
  {
    key: 'logout',
    label: <LogoutBtn/>
  },
];
