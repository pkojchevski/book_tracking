export const wantToRead = 'wantToRead';
export const read = 'read';
export const currentlyReading = "currentlyReading";
export const none = "none";

export const debounce = (func, delay) => { 
    let debounceTimer 
    return function() { 
        const context = this
        const args = arguments 
            clearTimeout(debounceTimer) 
                debounceTimer 
            = setTimeout(() => func.apply(context, args), delay) 
    } 
}  
