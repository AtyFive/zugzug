import React from 'react';
import '../index.css';
import TeamMember from './TeamMember';
import Stick from '../images/mr_stick_edited.jpg';
import {myTeam} from '../data/team_data';

export default function Team() {
 
  return (
    <div className = 'team__row'>
        
        <TeamMember name = 'Mr Kakadoon' text1 = {myTeam[0].intro} text2 = {myTeam[0].outro} imageUrl = {Stick}/>


        <h2 className = 'clear'>Chubbies</h2>
        <TeamMember name = 'Mr Kakadoon' text1 = {myTeam[0].intro} text2 = {myTeam[0].outro} imageUrl = {Stick}/>
        <TeamMember name = 'Stick' text = 'He is magnificaent' imageUrl = {Stick}/>
        <TeamMember name = 'Sean Sample' text = 'He is magnificaent' imageUrl = {Stick}/>
        
    </div>
  );
}
