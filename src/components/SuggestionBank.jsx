import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from '../utils/store';
import SuggestionBox from './SuggestionBox'
import '../assets/SuggestionBank.scss'

function SuggestionBank() {
  
  const cuisine = ['japanese', 'italian', 'mexican', 'spanish', 'chinese', 'greek'];
  const chores = ['dishes', 'laundry', 'cook', 'sweep', 'vacuum', 'mop']
  const exercise = ['push-ups', 'squats', 'lunges', 'planks', 'burpees', 'crunches']

  const suggestions = [cuisine, chores, exercise]
  const titles = ['CUISINES', 'CHORES', 'EXERCISES']
  


  const suggestionList = suggestions.map((list, i) => <SuggestionBox value={list} titles={<h5>{titles[i]}</h5>} key={i} />)


  return (
    <div id="suggestion-bank">
      <h4>Suggestions:</h4>
      <section id="suggestion-section">
        {suggestionList}
      </section>
    </div>
  )
}

export default SuggestionBank;


