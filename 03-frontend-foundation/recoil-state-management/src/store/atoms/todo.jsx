import { atom, selector } from "recoil";

export const todoAtom = atom({
    key : "todoAtom",
    default: [
        {
            title:"Do homework",
            description:"Do the homework",
            isCompeleted:false
        },
        {
            title:"Go to gym",
            description:"Go to the gym",
            isCompeleted:false
        }
    ]
});

export const todoFilter = atom({
    key:"todoFilter",
    default:"All",
})

export const fileterdTodos = selector({
    key:"filteredTodos",
    get : ({get}) => {
        if(get(todoFilter) === "All"){
            return get(todoAtom);
        }
        if(get(todoFilter) === "Completed"){
            return get(todoAtom).filter((todo)=> todo.isCompeleted === true);
        }
        if(get(todoFilter) === "Incompleted"){
            return get(todoAtom).filter((todo)=> todo.isCompeleted === false);
        }
    }
})

