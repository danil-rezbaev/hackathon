import React, {useState, useMemo} from 'react'
import InstallationProgress from '../installationProgress'
import { Button, Col, DatePicker, Divider, InputNumber, Modal, Row, Select, Space } from 'antd'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux';
import jobsSlice, { addQuantity } from '../../../../store/slices/jobsSlice';
import { log } from 'console';

const JobControlInfo = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(0);
    const [selectedNumber, setSelectedNumber] = useState(0);

    const {jobs} = useAppSelector(state => state.jobs);
    const dispatch = useAppDispatch();

    const handleChange = (value) => {
        setSelectedValue(value);
        console.log(value)
    }

    const onInputNumberChange = (value) => {
        setSelectedNumber(value);
    }

    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {

        console.log(selectedValue, selectedNumber);
        dispatch(addQuantity([selectedValue, selectedNumber]))
        setIsModalOpen(false);

      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
   
    const tasks = [
        [
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            jobs.slice(0, jobs.length / 2)
        ],
        [
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            // {title: 'Монтаж Г-образной опоры', maxQuantity: 1024, unit: 'кг'},
            jobs.slice(jobs.length / 2 + 1)
        ]
    ]

    const selectOptions = useMemo(() =>  [
        ...jobs.map((job, index) => ({value: index, label: job.title }))
        // {value: 1, lable: 'Монтаж Г-образной опоры'}
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
        
        
        <div style={{display: 'flex', justifyContent: 'flex-end'}}>
            <Button onClick={showModal} type='primary'>Добавить прогресс</Button>
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
                />
                <DatePicker placeholder='Дата выполненной работы' style={{ width: 220 }}/>

                <InputNumber placeholder='Кол-во сделанного в ед. изм.' style={{ width: 220 }} onChange={onInputNumberChange}/>
            </Space>
            <Divider/>

        </Modal>
    </div>
  )
}

export default JobControlInfo