import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

const ColorPicker = () => {
  const changeHandler = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }
  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Color Picker' />
      <div className='text-center'>
        <div id='preview'/>
        <div className='flex justify-center items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
            <ColorPickerComponent 
              id='inline-pallete' 
              mode='Palette' 
              modeSwitcher={false} 
              inline 
              showButtons={false}
              change={changeHandler}
            />
          </div>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
            <ColorPickerComponent 
              id='inline-pallete' 
              mode='Picker' 
              modeSwitcher={false} 
              inline 
              showButtons={false}
              change={changeHandler}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default ColorPicker;