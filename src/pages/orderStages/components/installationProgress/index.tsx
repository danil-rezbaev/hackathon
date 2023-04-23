import React, {FC, useState} from 'react'
import css from './index.module.css'
import { Progress, Slider } from 'antd'
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
        <h5 className={css.jobTitle}>{title}</h5>

        <Progress
            style={{width: '30%'}}
            percent={job && ((job?.currentQuantity / job?.maxQuantity) * 100)}
            showInfo={false}
            
        />

        <span>
            {`${job?.currentQuantity} из ${job?.maxQuantity} ${job?.unit}`}
        </span>
    </div>
  )
}

export default InstallationProgress