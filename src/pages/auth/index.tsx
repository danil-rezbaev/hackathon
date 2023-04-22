import { FC, useState } from 'react';
import { App, Checkbox, Tabs, TabsProps, Typography } from "antd";
import styles from './auth.module.css'
import { Button, Input } from 'antd';
import { CheckboxChangeEvent } from "antd/es/checkbox";
import Link from "antd/lib/typography/Link";
import { Form, Formik } from 'formik';
import * as yup from "yup";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

type AuthProps = unknown

const Auth: FC<AuthProps> = () => {
  const navigate = useNavigate()
  const { message } = App.useApp();

  const [authMethod, setAuthMethod] = useState('login')
  const [checkBox, setCheckBox] = useState(true)

  const onChange = (key: string) => {
    setAuthMethod(key === '1' ? 'login' : 'signup')
  }

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Вход`,
    },
    {
      key: '2',
      label: `Регистрация`,
    },
  ];

  const onCheckboxChange = (event: CheckboxChangeEvent) => {
    setCheckBox(value => !value)
  };

  const emailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

  const validationSchema = yup.object().shape({
    email: yup.string().min(5,"Минимум 5 символов").matches(emailRegExp, "Введите email").required("Обязательное поле"),
    password: yup.string().min(5,"Минимум 5 символов").required("Обязательное поле"),
  })

  const initialValue = {
    email: '',
    password: ''
  }

  const formSubmit = async (authData: typeof initialValue) => {
    try {
      const data = await axios.post(`/auth/${authMethod}`, { ...authData })

      if (String(data.status).startsWith('20')) {
        message.success('Успешный вход!');
        navigate('/')
      } else {
        message.error('Проверьте данные и повторите попытку!');
      }
    } catch (e) {
      message.error('Проверьте данные и повторите попытку!');
    }
  }

  const { Title, Text } = Typography;

  return (
    <div className={styles.authPage}>
      <div className={styles.formContent}>
        <Title level={2} style={{margin: 0}}>Войдите в систему</Title>

        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />

        <Formik
          initialValues={initialValue}
          onSubmit={formSubmit}
          validationSchema={validationSchema}
          validateOnChange
        >
          {({ values, errors, handleChange, handleBlur, handleSubmit, touched }) => (
            <Form
              className="form"
              onSubmit={handleSubmit}
              noValidate={true}
            >
              <div>
                <Input
                  placeholder="Ваша почта"
                  size="large"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                  status={!!errors.email ? "error" : ""}
                />
                {errors.email && touched.email
                  ? <Text type="danger">{errors.email}</Text>
                  : null }
              </div>

              <div>
                <Input
                  placeholder="Пароль"
                  size="large"
                  style={{marginTop: "10px"}}
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                  status={!!errors.password ? "error" : ""}
                />

                {errors.password && touched.password
                  ? <Text type="danger">{errors.password}</Text>
                  : null }
              </div>

              <div className={styles.formHint}>
                <Checkbox
                  onChange={onCheckboxChange}
                  checked={checkBox}
                >
                  Запомнить меня
                </Checkbox>

                <Link>
                  Забыли пароль?
                </Link>
              </div>

              <Button
                htmlType="submit"
                type="primary"
                size="large"
                block
                style={{marginTop: "15px"}}
              >
                {authMethod === "login" ? "Войти" : "Зарегистрироваться"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Auth;
