import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { employeesData, employeesGrid } from '../data/dummy';

const Employees = () => {
  
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Employees' />
      <GridComponent dataSource={employeesData} allowPaging allowSorting toolbar={['Search']} width='auto'>
        <ColumnsDirective>
          {
            employeesGrid.map((item, index) =>(
              <ColumnDirective key={index} {...item} />
            ))
          }
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar ]} />
      </GridComponent>
    </div>
  )
}

export default Employees;