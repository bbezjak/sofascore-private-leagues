import { useState } from 'react';

// React functions must start with Capital letter
export function EditLeagueCreateEvent(): [boolean, boolean, (bool:boolean) => void, (bool:boolean) => void] {

  const objTemplate = {
    editLeague: false,
    createEvent: false
  }  
  const [obj, setObj] = useState(objTemplate);

  function setEditLeague(bool: boolean) {
    if(bool) {
        setObj({
            editLeague: true,
            createEvent: false
          })
    } else {
        setObj({...objTemplate})
    }
  }

  function setCreateEvent(bool: boolean) {
    if(bool) {
        setObj({
            editLeague: false,
            createEvent: true
          })
    } else {
        setObj({...objTemplate})
    }
  }

  return [obj.editLeague, obj.createEvent, setEditLeague, setCreateEvent];
}