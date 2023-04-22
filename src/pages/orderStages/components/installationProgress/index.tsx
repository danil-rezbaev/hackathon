import React, {FC, useState} from 'react'
import css from './index.module.css'
import { Slider } from 'antd'
import { useAppSelector } from '../../../../hooks/redux';

interface InstallationProgressProps {
    title: string, 
    maxQuantity: number,
    unit: string,
}

const InstallationProgress: FC<InstallationProgressProps> = ({title, maxQuantity, unit}) => {
  
    const [currentQuantity, setCurrentQuantity] = useState(0);
    const job = useAppSelector(state => state.jobs.jobs.find(job => job.title == title))
  
    return (
    <div className={css.progress}>
        <h5>{title}</h5>
        <Slider
            style={{width: '30%'}}
            min={0}
            max={job?.maxQuantity}
            value={job?.currentQuantity}
        />

        <span>
            {`${job?.currentQuantity} из ${job?.maxQuantity} ${job?.unit}`}
        </span>
    </div>
  )
}

export default InstallationProgress