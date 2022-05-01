import React from 'react'
import 'date-fns'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker
} from "@material-ui/pickers";

function DateTime() {
    const [selectedDate, setSelectedDate] = React.useState(
        new Date ("2022-05-27T12:00:00")
    )

    const handleDateChange = (Date) =>{
        setSelectedDate(Date)
    }


    return(
        <div className="main">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justify='space-around'>
                    <KeyboardDatePicker
                        disableToolbar
                        variant='dialog'
                        format='MM/dd/yyy'
                        margin='normal'
                        id='date-picker'
                        label='Date Picker'
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label' : 'change date'
                        }}
                        />

                    <KeyboardTimePicker
                        margin='normal'
                        id='time-picker'
                        label='Time Picker'
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label' : 'change date'
                        }}
                        />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}

export default DateTime;