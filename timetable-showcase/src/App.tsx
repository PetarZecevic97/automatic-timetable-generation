import React, { useEffect, useState } from 'react';
import './App.css';
import timetable from './assets/timetable_display.json';
import groupsRelation from './assets/group_display.json';
import Filter from './components/filter';
import Timetable from './components/timetable';

function App() {

  const [ roomValue, setRoomValue ] = useState('');
  const [ lecturerValue, setLecturerValue ] = useState('');
  const [ groupValue, setGroupValue ] = useState('');
  const [ filteredTimetable, setFilteredTimetable ] = useState(timetable);

  const displayFilteredRoom = (room: string) => {
    setRoomValue(room)
    setLecturerValue('')
    setGroupValue('')
    const filteredItems = room ? timetable.filter((item) => item.room === room) : timetable
    setFilteredTimetable(filteredItems)
  }

  const displayFilteredLecturers = (lecturer: string) => {
    setLecturerValue(lecturer)
    setRoomValue('')
    setGroupValue('')
    const filteredItems = lecturer ? timetable.filter((item) => item.lecturer === lecturer) : timetable
    setFilteredTimetable(filteredItems)
  }

  const displayFilteredGroups = (group: string) => {
    setGroupValue(group)
    setLecturerValue('')
    setRoomValue('')
    const validGroups = groupsRelation.filter((item) => item.name === group)[0].groups
    const filteredItems = group ? timetable.filter((item) => item.groups.filter(value => validGroups.includes(value)).length > 0) : timetable
    setFilteredTimetable(filteredItems)
  }

  useEffect(() => { displayFilteredGroups('1i1a') },[]);


  const rooms = Array.from(new Set(timetable.map((item) => item.room)))
  const lecturers = Array.from(new Set(timetable.map((item) => item.lecturer))).sort()
  const groups = Array.from(new Set(groupsRelation.map((item) => item.name))).sort()

  return (
    <div className='wrapper'>
      <h1>UB_MATF - RASPORED CASOVA U LETNJEM SEMESTRU SKOLSKE 2022/23 GODINE</h1>
      <Filter items={rooms} displayFilteredItems={displayFilteredRoom} label="Ucionice" emptyLabel="Sve ucionice" value={roomValue}></Filter>
      <Filter items={lecturers} displayFilteredItems={displayFilteredLecturers} label="Predavaci" emptyLabel="Svi predavaci" value={lecturerValue}></Filter>
      <Filter items={groups} displayFilteredItems={displayFilteredGroups} label="Grupe" emptyLabel="Sve grupe" value={groupValue}></Filter>
      <Timetable items={filteredTimetable}></Timetable>
    </div>
  );
}

export default App;
