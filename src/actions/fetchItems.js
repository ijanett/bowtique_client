const ITEMS_URL = "http://localhost:3000/items"

export const fetchItems = () => {
    console.log("INSIDE");
    return (dispatch) => {
        console.log("FETCHING");
        
        fetch(ITEMS_URL)
            .then(res => res.json())
            .then(items => dispatch({ type: 'RENDER_ITEMS', items: items.data }))
    }
}