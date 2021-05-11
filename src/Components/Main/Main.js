import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import Homenav from "../Homenav/Homenav";
import Task from "../Task/Task";
import { UserContext } from "../../App";

const Main = ({ tasks }) => {
  let history = useHistory();
  // let datas =[{
  //     "id":"1",
  //     "name":"animal shelter",
  //     "img":"animalShelter.png"
  //     },{
  //     "id":"2",
  //      "name":"Baby Sit",
  //     "img":"babySit.png"

  //     },
  //     {
  //     "id":"3",
  //      "name":"Bird House",
  //      "img":"birdHouse.png"
  //      }
  //      ,
  //     {
  //     "id":"4",
  //      "name":"Child Support",
  //      "img":"childSupport.png"
  //      }
  //      ,
  //     {
  //     "id":"5",
  //      "name":"clean water",
  //      "img":"cleanWater.png"
  //      }
  //      ,
  //     {
  //     "id":"6",
  //      "name":"Clean Park",
  //      "img":"clearnPark.png"
  //      }
  //      ,
  //     {
  //     "id":"7",
  //      "name":"cloth swap",
  //      "img":"clothSwap.png"
  //      }
  //      ,
  //     {
  //     "id":"8",
  //      "name":"Drive Safety",
  //      "img":"driveSafety.png"
  //      }
  //      ,
  //     {
  //     "id":"9",
  //      "name":"extra voluenteer",
  //      "img":"extraVolunteer.png"
  //      }
  //      ,
  //     {
  //     "id":"10",
  //      "name":"food Charity",
  //      "img":"foodCharity.png"
  //      }
  //      ,
  //     {
  //     "id":"11",
  //      "name":"good Education",
  //      "img":"goodEducation.png"
  //      }
  //      ,
  //     {
  //     "id":"12",
  //      "name":"IT Help",
  //      "img":"ITHelp.png"
  //      }
  //      ,
  //     {
  //     "id":"13",
  //      "name":"library Books",
  //      "img":"libraryBooks.png"
  //      }
  //       ,
  //     {
  //     "id":"14",
  //      "name":"music Lessons",
  //      "img":"musicLessons.png"
  //      } ,
  //     {
  //     "id":"15",
  //      "name":"new books",
  //      "img":"newBooks.png"
  //      } ,
  //     {
  //     "id":"16",
  //      "name":"refuse Shelter",
  //      "img":"refuseShelter.png"
  //      } ,
  //     {
  //     "id":"17",
  //      "name":"river clean",
  //      "img":"riverClean.png"
  //      } ,
  //     {
  //     "id":"18",
  //      "name":"school suffiles",
  //      "img":"schoolSuffiles.png"
  //      } ,
  //     {
  //     "id":"19",
  //      "name":"study group",
  //      "img":"studyGroup.png"
  //      } ,
  //     {
  //     "id":"20",
  //      "name":"stuffed animal",
  //      "img":"stuffedAnimals.png"
  //      } ,
  //     {
  //     "id":"21",
  //      "name":"vote register",
  //      "img":"voteRegister.png"
  //      } ];

  //  useEffect(()=>{
  //     fetch('http://localhost:5000/addallevents',{
  //         method: 'POST',
  //         headers: {
  //             'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify(datas)
  //     })
  //     .then(res=>res.json())
  //     .then(data=>console.log(data))

  // },[])
  const [alldata, setAlldata] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-hollows-44552.herokuapp.com/events")
      .then((res) => res.json())
      .then((data) => setAlldata(data));
  }, []);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const handleEventClinck = (id) => {
    console.log(id);
    console.log(loggedInUser);
    if (loggedInUser.isSignedIn) {
      let result = alldata.find((r) => r._id === id);

      // fetch(`http://localhost:5000/addevents/${id}`)
      // .then(res=>res.json())
      // .then(data=>console.log(data))
      result.email=loggedInUser.email;
      fetch("https://enigmatic-hollows-44552.herokuapp.com/addnewevent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(result),
      });
      console.log(result);
      history.push("/events");
    } else {
      history.push("/login");
    }
  };

  return (
    <>
      <Homenav></Homenav>
      <div className="row">
        {alldata.map((data) => (
          <Task task={data} handleEventClinck={handleEventClinck} showCancle={false}></Task>
        ))}
      </div>
    </>
  );
};

export default Main;
