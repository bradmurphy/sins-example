import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { useContext, useState } from 'react';
import { Context } from './store/store';
import AddSin from './components/AddSin';
import Sin from './components/Sin';

function App() {
  const [newSinText, setNewSinText] = useState('');
  const [state, dispatch] = useContext(Context);
  const { sins } = state;

  const onChangeCheckbox = (e) => {
    // Get UID from checkbox.
    const uid = e.target.getAttribute('data-uid');
    // Map over sins, if sin matches the same UID, change value.
    const updatedSins = sins.map((sin) => {
      if (sin.uid === uid) {
        sin.value = !sin.value;
      }
      return sin;
    });

    // Update sins state.
    dispatch({ type: 'UPDATE_SINS', payload: updatedSins });
  };

  const onChangeText = (e) => setNewSinText(e.target.value);

  const deleteSin = (e) => {
    // Get UID from button.
    const uid = e.target.getAttribute('data-uid');
    // Remove sin from array of sins.
    const filteredSins = sins.filter((sin) => sin.uid !== uid);

    // Update sins state.
    dispatch({ type: 'UPDATE_SINS', payload: filteredSins });
  };

  const addSin = () => {
    // Populate new sin object
    const newSin = {
      value: false,
      label: newSinText,
      uid: uuidv4(),
    };
    // Add new sin to sins array
    const updatedSins = [...sins, newSin];

    // Update sins state.
    dispatch({ type: 'UPDATE_SINS', payload: updatedSins });
    // Reset sin text once added.
    setNewSinText('');
  };

  const addSinsForToday = () => {
    // Get active sins
    const activeSins = sins.filter((sin) => sin.value);

    // Steps:
    // 1. Check what day of the week it is.
    // 2. Push active sins to the current day array.

    console.table(activeSins);
  };

  return (
    <div className="App">
      {sins.length > 0 &&
        sins.map((sin) => (
          <Sin
            {...sin}
            key={sin.uid}
            onChangeCheckbox={onChangeCheckbox}
            deleteSin={deleteSin}
          />
        ))}
      <AddSin onChangeText={onChangeText} addSin={addSin} value={newSinText} />
      <button onClick={addSinsForToday}>Add Sins for Today</button>
    </div>
  );
}

export default App;
