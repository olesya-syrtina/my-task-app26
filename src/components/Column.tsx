import { Column } from "../types";
import   Task from "./Task";
import type  { Data } from "../types"
import { useState } from "react";

interface ColumnProps {
    column: Column,
    setData: React.Dispatch<React.SetStateAction<Data>>
}

    function ColumnComponent ({column, setData } : ColumnProps) {
        const [text, setText] = useState("");

    const handleAddTask = () => {
        if (!text.trim()) return
        

        const newTask = {
        id: Date.now(),
        text: text
        }

        setData(prev => ({
        ...prev,
        columns: {
            ...prev.columns,
            [column.id]: {
            ...prev.columns[column.id],
            tasks: [...prev.columns[column.id].tasks, newTask]
            }
        }
        }))

        setText("")
    }

    return (

    <div className="column">
      <h2 className="title">{column.title}</h2>

      <div className="tasks">
        {column.tasks.map(task => (
          <Task key={task.id} task={task} />
        ))}
      </div>
        <div className="new-task">
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Новая задача"
            />

            <button onClick={handleAddTask}>
                Добавить
            </button>
        </div>
    </div>
    )

}

export default ColumnComponent;