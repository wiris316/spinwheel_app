import React, { useState, useContext } from 'react';

export default function ToDoBox() {
  
  return (
    <form>
      <label htmlFor="ToDoBox" >Add to list: </label>
      <input name="ToDoBox" type='text' placeholder='' ></input>
    </form>
  )
}