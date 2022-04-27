import React, { useState } from 'react';


import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';

export default function DayPickerComponent(props) {
    
    const [selected, setSelected] = useState(null);

    let footer = <p>Please pick a day.</p>
    

    if (selected) { 
        props.set(selected);
        footer = <p>You picked {format(selected, 'PP')}.</p>;
    }

    return (
        <>
        
        <DayPicker
            mode="single"
            required
            selected={selected}
            onSelect= {setSelected}
            footer={footer}
             /> 

        </>
        

    );
}