import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import SuggestionBox from './SuggestionBox'
import '../assets/SuggestionBank.scss'

function SuggestionBank() {
  
  // const { result, setResult, data, tempDegree } = useContext(StoreContext)
  const food = ['japanese', 'italian', 'mexican', 'spanish', 'chinese', 'greek'];
  const chores = ['dishes', 'laundry', 'cook', 'sweep', 'vacuum', 'mop']
  const exercise = ['push-ups', 'squats', 'lunges', 'planks', 'burpees', 'crunches']

  const suggestions = [{ food: [food] }, { chores: [chores] }, { exercise: [exercise] }]

  const suggestionList = suggestions.map((list, i) => <SuggestionBox suggestions={suggestions} titles={['food', 'chores', 'exercise']} key={i} />)


  return (
    <div id="suggestion-bank">
      <h3>Suggestions:</h3>
      <section id="suggestion-section">
        {suggestionList}
      </section>
    </div>
  )
}

export default SuggestionBank;


