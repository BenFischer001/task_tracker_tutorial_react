import { useState } from "react"

const AddTask = ({addTask}) => {
    console.log("yo")
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            return
        }

        addTask({text,day,reminder})
        setText('')
        setDay('')
        setReminder('')
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder="Add Task" value = {text} onChange={(e) => setText(e.target.value)}></input>
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type='text' placeholder="Add Date & Time" value = {day} onChange={(e) => setDay(e.target.value)}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value = {reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
            </div>

            <input type="submit" value="save task" className="btn btn-block"></input>
        </form>
    )
}

export default AddTask