import * as React from "react";
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

export default function App() {
    const [selectedDay, setSelectedDay] = React.useState<Date>();
    const footer = selectedDay
        ? `You selected ${format(selectedDay, 'PPP')}.`
        : `Please pick a day.`;

    const hiddenDays = [
        new Date(2022, 3, 10),
        new Date(2022, 3, 12),
        new Date(2022, 3, 20),
        { from: new Date(2022, 4, 18), to: new Date(2022, 4, 29) }
    ];

    return (
        <DayPicker
            mode="single"
            selected={selectedDay}
            onSelect={setSelectedDay}
            footer={footer}
            DefaultMonth={hiddenDays[0]}
            hidden={hiddenDays}

        />
    );
}