import Title from 'antd/es/typography/Title'
import React, {FC, ReactNode} from 'react'
import css from './index.module.css'
import Paragraph from 'antd/es/typography/Paragraph'

interface DocumentsSigningWrapperProps {
    children: ReactNode,
    title: string,
    term: string
}

export const DocumentsSigningWrapper: FC<DocumentsSigningWrapperProps> = ({children, title, term}) => {
  return (
    <div className={css.wrapper}>
        
        <div className={css.wrapperHeader}>
            <h1>{title}</h1>
            <div className={css.termBadge}>
                Скачайте до {term}
            </div>
        </div>

        <div>
            {children}
        </div>

    </div>
  )
}
