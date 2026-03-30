export interface Task {
    id: number,
    text: string   
}

export interface Column {
    id: string,
    title: string,
    tasks: Task[]   
}

export interface Columns {
    [key: string]: Column
}

export interface Data {
  columns: Columns 
}
