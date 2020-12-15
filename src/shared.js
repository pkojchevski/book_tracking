export const wantToRead = 'wantToRead';
export const read = 'read';
export const currentlyReading = "currentlyReading";
export const none = "none";


export const changeShelfStatus = (arr, el, status) => {
    return arr.map(obj => {
        if(obj.id === el.id) {
           obj.shelf = status
        } 
        return obj
    })
 }