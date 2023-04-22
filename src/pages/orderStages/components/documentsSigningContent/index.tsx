import { Button } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, {FC} from 'react'
import css from './index.module.css'

interface DocumentsSigningContentProps {
  steps: string[],
  downloadTitle: string,
  files: any[],
  commentAvailable?: boolean,
  downloadAvailable?: boolean,
  nextStep: any,
}

const DocumentsSigningContent: FC<DocumentsSigningContentProps> = ({
  steps,
  downloadTitle,
  files,
  commentAvailable = false,
  downloadAvailable = false,
  nextStep
}) => {
  return (
    <div>
      
        <ul className={css.list}>
          {steps.map(item => (
            <li>{item}</li>
          ))}
        </ul>

        <h3 style={{textAlign: 'start'}}>{downloadTitle}</h3>
        <div>
          {files.map(file => (
            <a>{file}</a>
          ))}
        </div>

        {downloadAvailable && <Button>Загрузить подписанные файлы</Button>}
        {commentAvailable && <TextArea style={{marginBottom: 8}} placeholder='Комментарий к документам' rows={4}></TextArea>}


        <div style={{display: 'flex',justifyContent: 'flex-end'}}>
          <Button onClick={() => nextStep((prev: number) => prev + 1)}  type='primary'>Следующий этап</Button>

        </div>

    </div>
  )
}

export default DocumentsSigningContent