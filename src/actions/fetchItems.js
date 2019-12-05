const ITEMS_URL = "https://bowtique-api.herokuapp.com/items"

export const fetchItems = () => {
    return (dispatch) => {
        
        fetch(ITEMS_URL)
            .then(res => res.json())
            .then(items => dispatch({ type: 'RENDER_ITEMS', items: items.data }))
    }
}