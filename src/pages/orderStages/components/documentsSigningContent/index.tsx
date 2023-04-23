import { Button, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React, {FC, useState} from 'react'
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

  const [uploadedFiles, setUploadedFiles] = useState([]);

  const hiddenFileInput = React.useRef(null);

  const handleFileUpload = (event: any) => {
  //@ts-ignore
    hiddenFileInput.current?.click();
  }

  const handleFileInputChange = (event: any) => {
    console.log(event.target.files);
  //@ts-ignore
    setUploadedFiles(prev => [...prev, event.target.files[0]]);
  }

  return (
    <div className={css.flex}>
      
        <div style={{flexGrow: 1}}>

        <ul className={css.list}>
          {steps?.map(item => (
            <li>{item}</li>
          ))}
        </ul>

        <h3 style={{textAlign: 'start'}}>{downloadTitle}</h3>
        <div className={css.uploadedFiles} style={{justifyContent: 'flex-start', display: 'flex', marginBottom: 16}}>
        <ul>
            {files.map(file => (
              <li>

                <a>{file}</a>

              </li>
              
            ))}
          </ul>
        </div>

          {downloadAvailable &&
            (<div style={{justifyContent: 'flex-start', display: 'flex'}}>
              <Button onClick={handleFileUpload}>Загрузить дополнительные файлы</Button>
              <input 
                ref={hiddenFileInput} 
                type='file' 
                onChange={handleFileInputChange}
                style={{display: 'none'}}></input>
            </div>

            )
          }
          {commentAvailable && <TextArea style={{marginBottom: 8}} placeholder='Комментарий к документам' rows={4}></TextArea>}


          <div className={css.uploadedFiles}>
          <ul>
            {uploadedFiles.map(file => (
              <li>
                <a>{
                  //@ts-ignore
                  file.name
                }</a>

              </li>
            ))}
          </ul>
          
        </div>
        </div>
  

        <div style={{display: 'flex',justifyContent: 'flex-end', flexGrow: 0}}>
          <Button 
          disabled={downloadAvailable && uploadedFiles.length === 0}
          onClick={() =>{
            nextStep((prev: number) => prev + 1)
            !saveFiles && setUploadedFiles([])
          } }  type='primary'>Следующий этап</Button>

        </div>

    </div>
  )
}

export default DocumentsSigningContent