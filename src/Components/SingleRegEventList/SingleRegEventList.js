import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Task from '../Task/Task';

const SingleRegEventList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const email=loggedInUser.email;
    const [addedEvent, setaddedEvent] = useState([]);
  useEffect(() => {
    fetch(`https://enigmatic-hollows-44552.herokuapp.com/addedevents/${email}`)
      .then((res) => res.json())
      .then((data) => setaddedEvent(data));
  }, []);
  const handleEventClinck = (id) => {}

    return (
        <div className="row">
            
            {addedEvent.map((addedEvent) => (
          <Task task={addedEvent} handleEventClinck={handleEventClinck} showCancle={true}></Task>
        ))}
            
        </div>
    );
};

export default SingleRegEventList;