import { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/ChoiceList.scss'
import ConfirmResetDialog from './ConfirmResetDialog';

const ChoiceList = () => {
  
  const { data, reset, setReset, itemsObj, setItemsObj, selectedSuggestion, setSelectedSuggestion } = useContext(StoreContext)

  const [added, setAdded] = useState(false)
  const [list, setList] = useState([])
  
  useEffect(() => {
    if (selectedSuggestion == false) {
      const promise1 = new Promise((resolve, reject) => { 
        resolve(data[data.length-1]);
      })
      
      promise1
      .then((value) => {
        if (!itemsObj[value]) {
            itemsObj[value] = 1;
            setItemsObj(itemsObj)
            setAdded(true)
            return ([value, itemsObj[value]])
        } else if (itemsObj[value] && added) {
            let newObj = itemsObj;
            newObj[value]++;
            setItemsObj(newObj);
            return ([value, itemsObj[value]])
          }
        })
        .then((answer) => {
          if (answer !== undefined) {
            const newList = <li>{`${answer[0]} : ${answer[1]}`}</li>
            setList([...list, newList])
            return newList
          }
          
        })

        // If multiple of the same input, instead of adding a new list, replace existing one with updated "# of times inputed"
        .then((newList) => {
      
          if (list.length !== 0 && newList !== undefined) {
    
            for (let i = 0; i < list.length; i++) {
              if (list[i].props.children.split(' ')[0] == newList.props.children.split(' ')[0]) {
                list[i] = newList; 
                setList(list)
              } 
            }
          }
          
        })
    } else if (selectedSuggestion == true) {
      let newList = [];
      for (const [key, vals] of Object.entries(itemsObj)) {
        newList.push(<li>{`${key} : ${vals}`}</li>)
      }
      setList(newList)
      setAdded(true)
      setSelectedSuggestion(false)
    }    
  }, [data])

  const handleReset = () => {
    setReset(true)
  }

  return (
    <div id= "choice-list">
      <h3 id="data-list-title">Input : # of times submitted</h3>

      <ul id="data-list">
        {list}
      </ul>
      <button id="reset-button" onClick={handleReset} >reset</button>
      {reset && <ConfirmResetDialog />}
    </div>
  )
}

export default ChoiceList;