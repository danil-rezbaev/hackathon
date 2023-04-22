import { Steps } from 'antd'
import React, {useState} from 'react'
import { DocumentsSigningWrapper } from './components/documentsSigningWrapper'
import DocumentsSigningContent from './components/documentsSigningContent'
import css from './index.module.css'

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
            content: [<DocumentsSigningWrapper
                 children={<DocumentsSigningContent 
                    downloadTitle='Скачайте следующие файлы и проверьте корректность данных:'
                    files={[]}
                    commentAvailable
                    steps={documentsAgreementSteps}
                    nextStep={setCurrentContent}
                    />} 
                 term='21.01.2021'
                 title='Согласование документов'
                 />,
                <DocumentsSigningWrapper
                    term='21.01.2021'
                    title='Подписание документов'
                    children={
                        <DocumentsSigningContent
                            downloadAvailable
                            downloadTitle='Скачайте следующие файлы, подпишите и загрузите в поле ниже'
                            files={[]}
                            steps={documentsSigningSteps}
                            nextStep={setCurrentStep}
                        />
                    }
                />
            ],
        },
        {
            title: 'Выполнение работ',
            content: '',
        },
        {
            title: 'Лаб. испытания',
            content: '',
        },
        {
            title: 'Взаиморасчеты',
            content: '',
        },
    ]

    const stepsItems = steps.map((item) => ({key: item.title, title: item.title}))

    
  return (
    <div style={{padding: '0px 32px 0px 32px'}}>
        <Steps className={css.steps} items={stepsItems}></Steps>
        <div>{steps[currentStep].content[currentContent]}</div>
    </div>
  )
}

export default OrderStages