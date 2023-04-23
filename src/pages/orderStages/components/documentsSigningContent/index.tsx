import { UploadOutlined } from '@ant-design/icons'
import { App, Button, Upload } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { UploadProps } from 'antd/lib/upload/interface'
import React, { FC } from 'react'
import css from './index.module.css'

interface DocumentsSigningContentProps {
  steps?: string[],
  downloadTitle: string,
  files: any[],
  commentAvailable?: boolean,
  downloadAvailable?: boolean,
  nextStep: any,
  saveFiles?: boolean,
}

const DocumentsSigningContent: FC<DocumentsSigningContentProps> = ({
  steps,
  downloadTitle,
  files,
  commentAvailable = false,
  downloadAvailable = false,
  nextStep,
  saveFiles = false,
}) => {

  const { message } = App.useApp();

  const filesProps: UploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    maxCount: 5,
    defaultFileList: [
      {
        uid: '1',
        name: 'Договор субподряда.pdf',
        status: 'success',
        url: 'https://drive.google.com/uc?id=1u0xBRMdZF9obVHI6KDfZoCqhgq2IbMin&authuser=0&export=download',
        percent: 100,
      },
    ],
    beforeUpload() {
      return false
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className={css.flex}>

        <div style={{flexGrow: 1}}>

        <ul className={css.list}>
          {steps?.map(item => (
            <li>{item}</li>
          ))}
        </ul>

        <h3 style={{textAlign: 'start'}}>{downloadTitle}</h3>
          <div style={{
            textAlign: "left",
            margin: "16px 0",
            maxWidth: '500px'
          }}>

            <Upload {...filesProps}>
              <Button icon={<UploadOutlined />}>Загрузить дополнительные файлы</Button>
            </Upload>
          </div>

          {commentAvailable && <TextArea style={{marginBottom: 8}} placeholder='Комментарий к документам' rows={4}></TextArea>}
        </div>

        <div style={{display: 'flex',justifyContent: 'flex-end', flexGrow: 0, marginTop: "24px"}}>
          <Button
            type='primary'
            size="large"
            onClick={() =>{
              nextStep((prev: number) => prev + 1)
            }}
          >
            Следующий этап
          </Button>
        </div>
    </div>
  )
}

export default DocumentsSigningContent
