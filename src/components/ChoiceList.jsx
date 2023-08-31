import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/ChoiceList.scss'
import ConfirmResetDialog from './ConfirmResetDialog';

const ChoiceList = () => {
  
  const { data, reset, setReset, itemsObj, setItemsObj, /*list, setList,*/ selectedSuggestion, setSelectedSuggestion } = useContext(StoreContext)

  const [added, setAdded] = useState(false)
  const [list, setList] = useState([])
  // const [itemsObj, setItemsObj] = useState({})
  
  useEffect(() => {
    console.log('in choiceList')
    if (selectedSuggestion == false) {
      console.log('it is false')
      const promise1 = new Promise((resolve, reject) => { 
        resolve(data[data.length-1]);
      })
      
      promise1
      .then((value) => {
        if (!itemsObj[value]) {
            // console.log('first time added')
            itemsObj[value] = 1;
            setItemsObj(itemsObj)
            setAdded(true)
            return ([value, itemsObj[value]])
        } else if (itemsObj[value] && added) {
          // console.log('second time added')
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
              console.log('list',list)
              if (list[i].props.children.split(' ')[0] == newList.props.children.split(' ')[0]) {
                // console.log('truthy')
                list[i] = newList; 
                setList(list)
              } else if (list[i]) {
                console.log('whats in here', list[i][0])
              }
  
            }
            // console.log('result',newList.props.children.split(' ')[0])
  
          }
          
        })
    } else if (selectedSuggestion == true) {
      let newList = [];
      for (const [key, vals] of Object.entries(itemsObj)) {
        // console.log('itemsObj',itemsObj)
        newList.push(<li>{`${key} : ${vals}`}</li>)
      }
      setList(newList)
      setAdded(true)
      setSelectedSuggestion(false)
    }
    
    // console.log('list', list)
  }, [data])


  // console.log('seelist heree', list)

  const handleReset = () => {
    setReset(true)
    // setData([])
    // setParts([])
  }


  return (
    <div id= "choice-list">
      <h3 id="data-list-title">Input : # of times submitted</h3>

      <ul id="data-list">
        {list}
      </ul>
      <button id="reset-button" onClick={handleReset} >Reset</button>
      {reset && <ConfirmResetDialog />}
    </div>
    
  )
  
}

export default ChoiceList;