import React from 'react';
import '../App.css';



export default function TeamMember(props) {
 
  return (
    <div>
        <h3 className = 'clear'>{props.name}</h3>
        <div>
          <img className='team__image' src = {props.imageUrl} alt = '' />
          <p className = 'team__text'>{props.text1}</p>
          <p className = 'team__text'>{props.text2}</p>
        </div>


    </div>
  );
}
