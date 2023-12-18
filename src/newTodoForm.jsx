import { useState } from "react"

export function NewTodoForm(props){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === "") return
       props.onSubmit(newItem)
        setNewItem("")
      }

    return (<form className="new-item-form" onSubmit={handleSubmit}>
    <div className="form-row">
      <label htmlFor="item">Add New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
      <button className="btn">Add</button>
    </div>
  </form>)
}