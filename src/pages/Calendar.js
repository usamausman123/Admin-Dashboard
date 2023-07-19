import React from 'react';
import { ScheduleComponent, Agenda, Day, DragAndDrop, Inject, Month, Resize, Week, WorkWeek } from '@syncfusion/ej2-react-schedule';
import { Header } from '../components';
import { scheduleData } from '../data/dummy';

const Calendar = () => {
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg'>
      <Header category='Page' title='Calendar' />
      <ScheduleComponent 
        height='650px' 
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date(2021, 0, 10)}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
      
    </div>
  )
}

export default Calendar;