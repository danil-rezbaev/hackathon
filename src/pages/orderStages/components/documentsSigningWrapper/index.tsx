import Title from 'antd/es/typography/Title'
import React, { FC, ReactNode } from 'react'
import css from './index.module.css'

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
          <Title>
            {title}
          </Title>
          <div className={isTermDead ? css.termBadgeRed : css.termBadgeBlue}>
              {term && ( isTermDead
              ? `Сделайте до ${term}`
              : `Будет готово до ${term}`)
          }
          </div>
      </div>
        {children}
    </div>
  )
}
