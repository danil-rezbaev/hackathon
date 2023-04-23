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
    ]

  return (
    <div>
        
        <Table columns={columns} dataSource={data} pagination={{pageSize: 5}}/> 

    </div>
  )
}

export default JobControlHistory