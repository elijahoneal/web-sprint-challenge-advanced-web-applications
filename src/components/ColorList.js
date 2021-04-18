import React, { useState } from "react";
import Color from "./Color"
import EditMenu from "./EditMenu"
import { useHistory } from "react-router";
import { axiosWithAuth } from "../helpers/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const {push} = useHistory()
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth().put(`/colors/${colorToEdit.id}`, colorToEdit)
    .then( res => {
      console.log(res)
      setEditing(false)
      const modifiedColor = res.data
      updateColors(colors.map( color =>{ 
        if(color.id === modifiedColor.id){
          return modifiedColor
        }
        return color
    } ))
      push(`/colors/${colorToEdit.id}`)
    } )
    .catch( err => console.log(err))

  };

  const deleteColor = color => {
    axiosWithAuth().delete(`http://localhost:5000/api/colors/${color.id}`)
    .then( res => {
      console.log(res)
      const newColors = colors.filter( color => color.id !== Number(res.data) )
      updateColors(newColors)
    } )
    .catch( err => console.log(err))
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={editing} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={colorToEdit} saveEdit={saveEdit} setColorToEdit={setColorToEdit} setEditing={setEditing}/> }

    </div>
  );
};

export default ColorList;

//Task List:
//1. Complete the saveEdit functions by making a put request for saving colors. (Think about where will you get the id from...)
//2. Complete the deleteColor functions by making a delete request for deleting colors.