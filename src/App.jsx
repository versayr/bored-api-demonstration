import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activity, setActivity] = useState({});

  const getActivity = async () => {
    try {
      const response = await fetch('https://www.boredapi.com/api/activity/');
      setActivity(await response.json());
    } catch (e) {
      console.log('Error: ', e);
    }
  }

  useEffect(() => {
    getActivity();
  }, [])

  return (
    <>
    <h1>Bored API Demonstration</h1>
    <div>
      <h2> Why don&apos;t you... </h2>
      <h3>{activity.activity}</h3>
      <p>Accessibility: {activity.accessibility}</p>
      <p>Type: {activity.type}</p>
      <p>Price: {activity.price}</p>
      <p>Participants: {activity.participants}</p>
    </div>
    <button onClick={getActivity}>Get Another</button>
    </>
  )
}

export default App

// Todo:
// choose a type
// choose number of participants
// choose the price
// set a max price
// set an accessibility range
