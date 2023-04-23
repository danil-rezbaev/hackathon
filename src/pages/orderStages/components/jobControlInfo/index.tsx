import React, { FC, useEffect, useMemo, useState } from 'react'
import InstallationProgress from '../installationProgress'
import { Button, Col, DatePicker, DatePickerProps, Divider, InputNumber, Modal, Row, Select, Space } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import { addQuantity, setCompletion } from '../../../../store/slices/jobsSlice';
import { createEntry } from '../../../../store/slices/jobsHistorySlice';
import { checkCompletion } from '../../../../utils/checkCompletion';

interface JobControlInfoProps {
    nextStep: any;
}

const JobControlInfo: FC<JobControlInfoProps> = ({nextStep}) => {

    const {jobs, isCompleted} = useAppSelector(state => state.jobs);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [selectedDate, setSelectedDate] = useState('');
    const [isJobsCompleted, setIsJobsCompleted] = useState(isCompleted);

    const {entries} = useAppSelector(state => state.jobsHistory);
    const dispatch = useAppDispatch();

    useEffect(() => {

        if (checkCompletion(jobs)) {
            dispatch(setCompletion())
            setIsJobsCompleted(true);
            console.log(checkCompletion(jobs))

        }

    }, [jobs])


    const handleChange = (value: number) => {
        setSelectedValue(value);
        console.log(value)
    }

    const handleDateChange: DatePickerProps['onChange'] = (date, dateString) => {
        setSelectedDate(dateString);
    }

    const onInputNumberChange = (value: number | null) => {
        if (value !== null) {
            setSelectedNumber(value);
        }
    }

    const showModal = () => {
        setIsModalOpen(true);
      };

      const handleOk = () => {

        console.log(selectedValue, selectedNumber);
        dispatch(addQuantity([selectedValue, selectedNumber]))
        dispatch(createEntry({job: jobs[selectedValue],date: selectedDate, quanity: selectedNumber}))

        setIsModalOpen(false);

      };

      const handleCancel = () => {
        setIsModalOpen(false);
      };

    const tasks = [
        [
            jobs.slice(0, jobs.length / 2)
        ],
        [
            jobs.slice(jobs.length / 2 + 1)
        ]
    ]

    const selectOptions = useMemo(() =>  [
        ...jobs.map((job, index) => ({value: index, label: job.title }))
    ], [jobs])

  return (
    <div >
        <Row style={{ overflow: 'auto', height: '250px'}} gutter={8}>
            <Col span={12}>
                {tasks[0][0].map(item =>(
                    <InstallationProgress
                    title={item.title}
                    maxQuantity={item.maxQuantity}
                    unit={item.unit}
                    />
                ))}
            </Col>
            <Col span={12}>
            {tasks[1][0].map(item =>(
                    <InstallationProgress
                    title={item.title}
                    maxQuantity={item.maxQuantity}
                    unit={item.unit}
                    />
                ))}
            </Col>
        </Row>

        <div style={{display: 'flex', justifyContent: 'flex-end', marginTop: '16px'}}>
            {isJobsCompleted
                ? <Button onClick={() => nextStep((prev : number)=> prev + 1)} type='primary' size="large">Завершить этап</Button>
                : <Button onClick={showModal} type='primary' size="large">Добавить прогресс</Button>
            }
        </div>

        <Modal
            title='Добавление прогресса'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            width={750}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Отмена
                </Button>,
                <Button key="submit" type="primary"  onClick={handleOk}>
                    Добавить
              </Button>,
            ]}
        >
            <Divider/>

            <Space style={{alignItems: 'center'}}>

                <Select
                    style={{ width: 220 }}
                    options={selectOptions}
                    onChange={handleChange}
                    defaultValue={0}
                />
                <DatePicker onChange={handleDateChange} placeholder='Дата выполненной работы' style={{ width: 220 }}/>

                <InputNumber placeholder='Кол-во сделанного в ед. изм.' style={{ width: 220 }} onChange={onInputNumberChange}/>
            </Space>
            <Divider/>

        </Modal>
    </div>
  )
}

export default JobControlInfo
