import { Table } from 'antd'
import React from 'react'
import { useAppSelector } from '../../../../hooks/redux'

const JobControlHistory = () => {

    const history = useAppSelector(state => state.jobsHistory)

    const columns = [
        {
            title: 'Наименование работы',
            dataIndex: 'jobName',
            key: 'jobName',
        },
        {
            title: 'Дата выполнения',
            dataIndex: 'completionDate',
            key: 'completionDate',
        },
        {
            title: 'Кол-во выполненной работы',
            dataIndex: 'unitValue',
            key: 'unitValue ',
        },
    ]

    const data = [
        ...history.entries.map((entry, index) => ({
            key: index.toString(),
            jobName: entry.job.title,
            completionDate: entry.date,
            unitValue: entry.quanity,
        }))
        // {
        //     key: '1',
        //     jobName: 'Монтаж Г-образной опоры',
        //     completionDate: '30.04.2023',
        //     unitValue: 102
        // },
        // {
        //     key: '2',
        //     jobName: 'Монтаж Г-образной опоры',
        //     completionDate: '30.04.2023',
        //     unitValue: 102
        // },
        // {
        //     key: '3',
        //     jobName: 'Монтаж Г-образной опоры',
        //     completionDate: '30.04.2023',
        //     unitValue: 102
        // },
        // {
        //     key: '4',
        //     jobName: 'Монтаж Г-образной опоры',
        //     completionDate: '30.04.2023',
        //     unitValue: 102
        // },
        // {
        //     key: '5',
        //     jobName: 'Монтаж Г-образной опоры',
        //     completionDate: '30.04.2023',
        //     unitValue: 102
        // },
        // {
        //     key: '6',
        //     jobName: 'Монтаж Г-образной опоры',
        //     completionDate: '30.04.2023',
        //     unitValue: 102
        // },
    ]

  return (
    <div>
        
        <Table columns={columns} dataSource={data} pagination={{pageSize: 5}}/> 

    </div>
  )
}

export default JobControlHistory