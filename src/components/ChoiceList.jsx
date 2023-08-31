import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/ChoiceList.scss'
import ConfirmResetDialog from './ConfirmResetDialog';

const ChoiceList = () => {
  
  const { data, reset, setReset, /*itemsObj, setItemsObj, list, setList,*/ selectedSuggestion, setSelectedSuggestion } = useContext(StoreContext)

  const [added, setAdded] = useState(false)
  const [list, setList] = useState([])
  const [itemsObj, setItemsObj] = useState({})
  
  useEffect(() => {
    console.log('in hereee')
    // if (selectedSuggestion == false) {
      console.log('it is false')
      const promise1 = new Promise((resolve, reject) => { 
        resolve(data[data.length-1]);
      })
      
      promise1
      .then((value) => {
          if (!itemsObj[value] ) {
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
        .then((newList) => {
          if (list.length !== 0 && newList !== undefined) {
            for (let i = 0; i < list.length; i++) {
              if (list[i].props.children.split(' ')[0] == newList.props.children.split(' ')[0]) {
                list[i] = newList; 
                setList(list)
              }
  
            }
            // console.log('result',newList.props.children.split(' ')[0])
  
          }
          
        })
    // } 

  }, [data])


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