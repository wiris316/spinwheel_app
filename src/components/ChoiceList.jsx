import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import '../assets/ChoiceList.scss'

const ChoiceList = () => {
  
  const { data } = useContext(StoreContext)
  const [itemsObj, setItemsObj] = useState({})
  const [added, setAdded] = useState(false)
  const [lastAdded, setLastAdded] = useState(null)
  const [list, setList] = useState([])
  
  useEffect(() => {
    console.log('whats here', data[data.length-1])
    const promise1 = new Promise((resolve, reject) => { 
      resolve(data[data.length-1]);
    })
    
    promise1
    .then((value) => {
        if (!itemsObj[value] && value !== null || undefined) {
          itemsObj[value] = 1;
          setItemsObj(itemsObj)
          return ([value, itemsObj[value]])
        } else if (itemsObj[value] && Object.keys(itemsObj).length > 1) {
          let newObj = itemsObj;
          newObj[value]++;
          setItemsObj(newObj);
          return ([value, itemsObj[value]])
        }
      })
      .then((answer) => {
        // console.log()
        console.log('answer', answer)
        if (answer !== undefined) {
          const newList = <li>{`${answer[0]} : ${answer[1]}`}</li>
          setList([...list, newList])
          return newList
        }
        // console.log('data', data)
        // console.log('itemsObj', itemsObj)
        // if (list.props.children.split())
        
      })
      .then((newList) => {
        if (list.length !== 0) {
          for (let i = 0; i < list.length; i++) {
            if (list[i].props.children.split(' ')[0] == newList.props.children.split(' ')[0]) {
              list[i] = newList; 
              setList(list)
            }

          }
          console.log('right here',newList.props.children.split(' ')[0])

        }
        
      })
  }, [data])


  return (
    <div id= "choice-list">
      <h2 id="data-list-title">Track your inputs:</h2>
      <ul id="data-list">
        {list}
      </ul>
    </div>

  )
  
}

export default ChoiceList;