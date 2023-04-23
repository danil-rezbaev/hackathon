import { Breadcrumb, Steps } from 'antd'
import React, {useEffect, useState} from 'react'
import { DocumentsSigningWrapper } from './components/documentsSigningWrapper'
import DocumentsSigningContent from './components/documentsSigningContent'
import css from './index.module.css'
import JobControl from './components/jobControl'
import { Navigate, useNavigate, useNavigation } from 'react-router-dom'
import Link from 'antd/es/typography/Link'

function OrderStages() {

    const [currentStep, setCurrentStep] = useState(0);
    const [currentContent, setCurrentContent] = useState(0);

    const documentsAgreementSteps = [
        'Ознакомьтесь с текстом договора',
        'Проверьте данные'
    ]

    const documentsSigningSteps = [
        'Ознакомтесь с текстом договора',
        'Проверьте данные',
        'Скачайте бланк договора. Распечатайте, подпишите ручкой или факсимильной подписью и загрузите скан-копии или фотографии данных документов, нажмите кнопку «Отправить на проверку».',
    ]

    const steps = [
        {
            title: 'Подписание док-ов',
            content: [
                <DocumentsSigningWrapper
                    children={<DocumentsSigningContent 
                        downloadTitle='Скачайте следующие файлы и проверьте корректность данных:'
                        files={[
                            'Договор субподряда.pdf'
                        ]}
                        commentAvailable
                        steps={documentsAgreementSteps}
                        nextStep={setCurrentContent}
                    />} 
                    term='20.01.2023'
                    title='Согласование документов'
                 />,
                <DocumentsSigningWrapper
                    term='21.01.2023'
                    title='Подписание документов'
                    children={
                        <DocumentsSigningContent
                            downloadAvailable
                            downloadTitle='Скачайте следующие файлы, подпишите и загрузите в поле ниже'
                            files={['Договор субподряда.pdf']}
                            steps={documentsSigningSteps}
                            saveFiles
                            nextStep={setCurrentContent}
                        />
                    }
                />,
                <DocumentsSigningWrapper
                    term='21.01.2023'
                    title='Проверка документов заказчиком'
                    isTermDead={false}
                    children={
                        <DocumentsSigningContent
                            downloadTitle='Прикрипленные вами файлы'
                            files={[]}
                            
                            nextStep={setCurrentStep}
                        />
                    }
                />,
            ],
        },
        {
            title: 'Выполнение работ',
            content: [
                <DocumentsSigningWrapper
                    title='Скачайте журнал входного и общего контроля работ для заполнения'
                    children={
                        <DocumentsSigningContent
                            downloadTitle='Скачайте следующие файлы'
                            files={[
                                'Общий журнал работ.pdf',
                                'Журнал входного контроля.pdf',
                            ]}
                            nextStep={setCurrentContent}
                        />
                    }

                />,
                <DocumentsSigningWrapper
                    title='Учет выполнения работ'
                >
                    <JobControl nextStep={setCurrentContent} />
                </DocumentsSigningWrapper>,
                <DocumentsSigningWrapper
                    title='Загрузите следующие документы с подписью:'
                    term='30.04.2023'
                    isTermDead={true}
                >   
                    <DocumentsSigningContent
                        downloadTitle=''
                        downloadAvailable
                        files={[
                        ]}
                        steps={[
                            'Общий журнал работ',
                            'Журнал входного контроля',
                            'Файл с фотоотчетом выполненного проекта',
                        ]}
                        nextStep={setCurrentStep}
                    />
                </DocumentsSigningWrapper>
            ],
        },
        {
            title: 'Лаб. испытания',
            content: [
                <DocumentsSigningWrapper
                    title='Загрузите протокол о выполненных испытаний независимой лаборатории'
                    isTermDead
                    term='30.04.2023'
                >
                    <DocumentsSigningContent
                        downloadTitle=''
                        files={[]}
                        nextStep={setCurrentContent}
                        downloadAvailable

                    />
                </DocumentsSigningWrapper>,
                <DocumentsSigningWrapper
                    title='Ожидайте проверки всех документов и полной сдачи проекта'
                >
                    <DocumentsSigningContent
                        downloadTitle='Ожидайте, пожалуйста, мы вас оповестим, это не займет больше 14 дней'
                        files={[]}
                        nextStep={setCurrentStep}
                    />
                </DocumentsSigningWrapper>,
            ],
        },
        {
            title: 'Взаиморасчеты',
            content: [
                <DocumentsSigningWrapper
                    title='Выставите нам счет'
                >
                    <DocumentsSigningContent
                        downloadTitle='Прикрепите файл счета'
                        files={[]}
                        downloadAvailable
                        nextStep={setCurrentContent}
                    />
                </DocumentsSigningWrapper>,
                <DocumentsSigningWrapper
                    title='Скачайте акт и отправьте нам файл с вашей подписью'
                >
                    <DocumentsSigningContent
                        downloadTitle=''
                        files={['Акт №13.pdf']}
                        downloadAvailable
                        nextStep={setCurrentContent}
                    />
                </DocumentsSigningWrapper>,
                <Navigate to={'/orders'}/>

            ],
        },
    ]

    const stepsItems = steps.map((item) => ({key: item.title, title: item.title}))

    useEffect(() => {
        setCurrentContent(0);
    }, [currentStep])

    const navigate = useNavigate();

    
  return (
    <div style={{padding: '0px 32px 0px 32px'}}>
        <Breadcrumb
        style={{marginTop: 16}}
            items={[
                {
                    title: <Link onClick={() => navigate('/responses')}>В работе</Link>
                },
                {
                    title: 'Государственный контракт № 3/20/ОБ г. Сочи'
                },
            ]}
        />
        <Steps current={currentStep} className={css.steps} items={stepsItems}></Steps>
        <div>{steps[currentStep].content[currentContent]}</div>
    </div>
  )
}

export default OrderStages