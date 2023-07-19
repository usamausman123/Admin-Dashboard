import React from 'react'
import { KanbanComponent, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-kanban';
import { Header } from '../components';
import { kanbanData, kanbanGrid } from '../data/dummy';

const Kanban = () => {

  function cardTemplate(props) {
    // console.log('kanban props: ', props);
    return (<div className="card-template">
      <div className='e-card-content'>
        <table className="card-template-wrap w-full">
          <tbody>
            <tr>
              <td className="CardHeader">Id:</td>
              <td>{props.Id}</td>
            </tr>
            <tr>
              <td className="CardHeader">Title:</td>
              <td>{props.Title}</td>
            </tr>
            <tr>
              <td className="CardHeader">Type:</td>
              <td>{props.Type}</td>
            </tr>
            <tr>
              <td className="CardHeader">Priority:</td>
              <td>{props.Priority}</td>
            </tr>
            <tr>
              <td className="CardHeader">Summary:</td>
              <td>{props.Summary}</td>
            </tr>
            <tr>
              <td className="CardHeader">Estimates:</td>
              <td>{props.Estimate}</td>
            </tr>
            <tr>
              <td className="CardHeader">Assignee:</td>
              <td>{props.Assignee}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>);
  }
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Kanban Board' />
      <KanbanComponent 
        id='kanban' 
        dataSource={kanbanData} 
        keyField='Status'
        cardSettings={{ 
          contentField: 'Summary', 
          headerField: 'Id', 
          // selectionType: 'Multiple', // Kanban board allows to select single and multiple selection of cards when mouse or keyboard interactions using selectionType property. The property contains following types. None, Single, Multiple
          // template: cardTemplate // You can customize the default card layout using 'template' property of 'cardSettings' as per your application needs.
        }} 
        // swimlaneSettings={{ keyField: 'Assignee', showEmptyRow: true, allowDragAndDrop: true }} // 'Swimlane' can be enabled by mapping the fields 'swimlaneSettings.keyField' to appropriate column name in dataSource. This enables the grouping of the cards based on the mapped column values.
      >
        
        <ColumnsDirective>
          {
            kanbanGrid.map((item, index) => (
              <ColumnDirective key={index} {...item}  />
            ))
          }
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban;