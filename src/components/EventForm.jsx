import React, {useState} from "react";
function EventForm({addEvent}){
    const[event, setEvent] = useState({
        type:"",
        place:"",
        date:"",
        food:"",
        timing:""   
    });

    const handleChange = (e) => {
        setEvent({event, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(event.type && event.place && event.date){
            addEvent(event);
            setEvent({type:"",place:"",date:"",food:"",timing:""});
        }
    };

    return(
        <form onSubmit = {handleSubmit} style={{textAlign"center", margin:"20px"}}>
            <select name="type" value={event.type} onChange={handleChange}>
                <option value="">Select Event Type</option>
                <option>Wedding</option>
                <option>Birthday Party</option>
                <option>Reception</option>
                <option>Get Together</option>
                <option>Cradle Ceremony</option>
            </select>

            <select name="timing" value={event.timing} onChange={handleChange}>
                <option value="">Select Timing</option>
                <option>Morning</option>
                <option>Evening</option>
                <option>Night</option>
            </select>

            <select name="food"value={event.food} onChange={handleChange}>
                <option value="">Select Food Preference</option>
            </select>
        </form>
    )
}