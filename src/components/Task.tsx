import { Task  as TaskType} from "../types";

interface TaskProps {
    task: TaskType
}

function Task ({task}: TaskProps){
    return (
        <div className='task'>{task.text}</div>
    )
}

export default Task;