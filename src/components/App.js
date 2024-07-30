
import React,{useEffect, useState} from "react";
import './../styles/App.css';

const App = () => {
   const suggestions = [
    "Apple",
    "Banana",
    "Cherry",
    "Dragon Fruit",
    "Elderberry",
    "Fig",
    "Grape",
    "Honeydew",
    "Jackfruit",
    "Kiwi",
    "Lemon",
    "Mango",
    "Nectarine",
    "Orange",
    "Papaya",
    "Quince",
    "Raspberry",
    "Strawberry",
    "Tangerine",
    "Umbrella",
    "Vinegar",
    "Watermelon",
    "Xanadu",
    "Yogurt",
    "Zucchini"
   ]


  const[query, setQuery] = useState('')
  const[filteredsuggestions, setfilteredSuggestions] = useState('')

  useEffect(()=>{
    setTimeout(()=>{
      setfilteredSuggestions(suggestions.filter((suggestion)=>
            suggestion.toLowerCase().includes(query.toLowerCase()))
    )
    },200)
  },[query,suggestions])

   
  const handleChange = (e) => {
    setQuery(e.target.value)
  }



  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Search Item</h1>
        <input type="text" value={query} onChange={handleChange} />
        <ul>
        {filteredsuggestions.map((suggestion) => (
          <li key={suggestion}>{suggestion}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
