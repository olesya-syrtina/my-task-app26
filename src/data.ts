import type { Data } from "./types";
 
export const initialData: Data =  {
    columns: {
        todo: {
            title: "ToDo",
            id: "todo",
            tasks:  [{ id: 1, text: 'Изучить React' },
            { id: 2, text: 'Сделать приложение' }]
        },
        isProgress: {
            title: "isProgress",
            id: "isProgress",
            tasks: [{id: 3, text: 'Понять пропс'}]
        },
        done: {
            title: "Done",
            id: "done",
            tasks: [{id: 4, text: 'Изучить TypeScript'}]
        }
    }
}
