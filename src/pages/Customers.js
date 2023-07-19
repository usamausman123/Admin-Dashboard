import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
import { customersData, customersGrid } from '../data/dummy';


const Customers = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Customer' />
      <GridComponent dataSource={customersData} allowPaging allowSorting toolbar={['Delete']} editSettings={{ allowDeleting: true, allowEditing: true }} width='auto'>
        <ColumnsDirective>
          {
            customersGrid.map((item, index) =>(
              <ColumnDirective key={index} {...item} />
            ))
          }
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Edit, Sort, Filter ]} />
      </GridComponent>
    </div>
  )
}

export default Customers;