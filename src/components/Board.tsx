import type { Data } from "../types";
import Column from "./Column";

interface BoardProps {
  data: Data,
  setData: React.Dispatch<React.SetStateAction<Data>>
}

function Board ({data, setData }: BoardProps) {
    console.log(data)
    return (
    <div className ="board">
        {Object.values(data.columns).map(column => (
                <Column key={column.id} column={column} setData={setData}/>
            ))}
    </div>
)}

export default Board