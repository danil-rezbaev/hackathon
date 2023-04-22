import React, {FC, useState} from 'react'
import css from './index.module.css'
import { Slider } from 'antd'

interface InstallationProgressProps {
    title: string, 
    maxQuantity: number,
    unit: string,
}

const InstallationProgress: FC<InstallationProgressProps> = ({title, maxQuantity, unit}) => {
  
    const [currentQuantity, setCurrentQuantity] = useState(0);
  
    return (
    <div className={css.progress}>
        <h5>{title}</h5>
        <Slider
            style={{width: '30%'}}
            min={0}
            max={maxQuantity}
            value={currentQuantity}
        />

        <span>
            {`${currentQuantity} из ${maxQuantity} ${unit}`}
        </span>
    </div>
  )
}

export default InstallationProgress