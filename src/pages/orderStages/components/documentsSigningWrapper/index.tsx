import Title from 'antd/es/typography/Title'
import React, {FC, ReactNode} from 'react'
import css from './index.module.css'
import Paragraph from 'antd/es/typography/Paragraph'

interface DocumentsSigningWrapperProps {
    children: ReactNode,
    title: string,
    term?: string,
    isTermDead?: boolean,
}

export const DocumentsSigningWrapper: FC<DocumentsSigningWrapperProps> = ({children, title, term, isTermDead = true}) => {
  return (
    <div className={css.wrapper}>
        
        <div className={css.wrapperHeader}>
            <h1>{title}</h1>
            <div className={isTermDead ? css.termBadgeRed : css.termBadgeBlue}>
                {term && ( isTermDead 
                ? `Скачайте до ${term}`
                : `Будет готово до ${term}`)
            }
            </div>
        </div>

        <div>
            {children}
        </div>

    </div>
  )
}
