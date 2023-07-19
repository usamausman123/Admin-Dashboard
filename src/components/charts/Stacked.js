import React from 'react';
import { Category, ChartComponent, Inject, Legend, SeriesCollectionDirective, SeriesDirective, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const Stacked = ({ width, height }) => {
  const { currentMode } = useStateContext();
  // const pointRender = (args) => {
  //   let seriesColor = ['#00bdae', '#404041', '#357cd2', '#e56590', '#f8b883',
  //       '#70ad47', '#dd8abd', '#7f84e8', '#7bb4eb', '#ea7a57'];
  //   args.fill = seriesColor[args.point.index];
  // };
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: '#fff' }}
      background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      // pointRender={pointRender} // for different colors of each bar
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>

    </ChartComponent>
  )
}

export default Stacked;