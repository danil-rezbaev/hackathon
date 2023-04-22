import React, { ChangeEvent, FC, useState } from 'react';
import { App, Button, Input, Modal, Space, Typography } from "antd";
import { Form, Formik } from "formik";
import * as yup from "yup";
import axios from "../../../axios";
import styles from './CompanyProfileAdd.module.css'
import { Company } from "../../../types/Company";
import { useAppDispatch } from "../../../hooks/redux";
import { updateCompany } from "../../../store/slices/userSlice";

export type CompanyProfileAddProps = unknown

const CompanyProfileAdd: FC<CompanyProfileAddProps> = (props) => {
  const { message } = App.useApp();
  const [modalOpen, setModalOpen] = useState(false);
  const [formValue, setFormValue] = useState<Company>({
    title: "",
    ogrn: "",
    ogrnReg: "",
    inn: "",
    kpp: "",
    address: "",
    capital: "",
    dateReg: "",
    manager: "",
    registrationDate: "",
  })

  const handlerBtn = () => {
    setModalOpen(value => !value)
  }

  const validationSchema = yup.object().shape({
    inn: yup.string().min(10,"Минимум 10 символов").max(10, "Максимум 10 символов").required("Обязательное поле"),
    title: yup.string().required("Обязательное поле"),
    ogrn: yup.string().min(13,"Минимум 13 символов").max(13,"Максимум 13символов").required("Обязательное поле"),
    address: yup.string().min(5,"Минимум 7 символов").required("Обязательное поле"),
    manager: yup.string().min(5,"Минимум 5 символов").required("Обязательное поле"),
    dateReg: yup.string().required("Обязательное поле"),
    capital: yup.string().required("Обязательное поле"),
  })

  const [innValue, setInnValue] = useState('')
  const [innHint, setInnHint] = useState(false)

  const handleInn = (event: ChangeEvent<HTMLInputElement>) => {
    setInnValue(event.target.value)
    setInnHint(event.target.value?.length === 10)
  }

  const dispatch = useAppDispatch()

  const formSubmit = (authData: Company) => {
    dispatch(updateCompany(authData))
  }

  const getDataInn = async () => {
    try {
      const data = await axios.get(`/company/parse/${innValue}`)

      if (String(data.status).startsWith('20')) {
        message.success('Информация найдена!');
        setFormValue(data.data)
      } else {
        message.error('Проверьте данные и повторите попытку!');
      }
    } catch (e) {
      message.error('Проверьте данные и повторите попытку!');
    }
  }

  const { Text } = Typography;

  return (
    <>
      <div style={{padding: '30px'}}>
        <Button type="primary" onClick={handlerBtn}>Добавить компанию</Button>
      </div>

      <Modal
        title="Добавление компании"
        style={{ top: 20 }}
        open={modalOpen}
        width={1000}
        footer={null}
      >
        <Formik
          initialValues={formValue}
          onSubmit={formSubmit}
          validationSchema={validationSchema}
          validateOnChange
          enableReinitialize={true}
        >
          {({ values, errors, handleChange, handleBlur, isValidating, handleSubmit, touched }) => (
            <Form
              className={styles.form}
              onSubmit={handleSubmit}
              noValidate={true}
            >
              <div
                className={styles.formContent}
              >
                <div>
                  <Input
                    placeholder="ИНН"
                    size="large"
                    name="inn"
                    onChange={(e) => {
                      handleChange(e)
                      handleInn(e)
                    }}
                    value={values.inn}
                    status={!!errors.inn ? "error" : ""}
                  />
                  {errors.inn && touched.inn
                    ? <Text type="danger">{errors.inn}</Text>
                    : null }

                  {innHint ? (
                    <Space>
                      <p>Произвести поиск информации по ИНН?</p>
                      <Button
                        type="primary"
                        size="small"
                        onClick={getDataInn}
                      >
                        Вперед!
                      </Button>
                    </Space>
                  ) : null}
                </div>

                <div>
                  <Input
                    placeholder="Наименование организации"
                    size="large"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                    status={!!errors.title ? "error" : ""}
                  />
                  {errors.title && touched.title
                    ? <Text type="danger">{errors.title}</Text>
                    : null }
                </div>

                <div>
                  <Input
                    placeholder="ОГРН"
                    size="large"
                    name="ogrn"
                    onChange={handleChange}
                    value={values.ogrn}
                    status={!!errors.ogrn ? "error" : ""}
                  />
                  {errors.ogrn && touched.ogrn
                    ? <Text type="danger">{errors.ogrn}</Text>
                    : null }
                </div>

                <div>
                  <Input
                    placeholder="КПП (если есть)"
                    size="large"
                    name="kpp"
                    onChange={handleChange}
                    value={values.kpp}
                    status={!!errors.kpp ? "error" : ""}
                  />
                  {errors.kpp && touched.kpp
                    ? <Text type="danger">{errors.kpp}</Text>
                    : null }
                </div>

                <div>
                  <Input
                    placeholder="Юридический адрес"
                    size="large"
                    name="address"
                    onChange={handleChange}
                    value={values.address}
                    status={!!errors.address ? "error" : ""}
                  />
                  {errors.address && touched.address
                    ? <Text type="danger">{errors.address}</Text>
                    : null }
                </div>

                <div>
                  <Input
                    placeholder="Дата регистрации"
                    size="large"
                    name="dateReg"
                    onChange={handleChange}
                    value={values.dateReg}
                    status={!!errors.dateReg ? "error" : ""}
                  />
                  {errors.dateReg && touched.dateReg
                    ? <Text type="danger">{errors.dateReg}</Text>
                    : null }
                </div>

                <div>
                  <Input
                    placeholder="Уставной капитал"
                    size="large"
                    name="capital"
                    onChange={handleChange}
                    value={values.capital}
                    status={!!errors.capital ? "error" : ""}
                  />
                  {errors.capital && touched.capital
                    ? <Text type="danger">{errors.capital}</Text>
                    : null }
                </div>

                <div>
                  <Input
                    placeholder="Руководитель организации"
                    size="large"
                    name="manager"
                    onChange={handleChange}
                    value={values.manager}
                    status={!!errors.manager ? "error" : ""}
                  />
                  {errors.manager && touched.manager
                    ? <Text type="danger">{errors.manager}</Text>
                    : null }
                </div>
              </div>

              <Space
                direction="horizontal"
                align="end"
                style={{
                  marginTop: '16px',
                  justifyContent: "flex-end"
                }}
              >
                <Button
                  size="middle"
                  onClick={() => setModalOpen(false)}
                >
                  Отменить
                </Button>

                <Button
                  htmlType="submit"
                  type="primary"
                  size="middle"
                  onClick={() => isValidating ? formSubmit(values) : null }
                >
                  Отправить
                </Button>
              </Space>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default CompanyProfileAdd;
