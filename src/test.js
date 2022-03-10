// const modifyStat = (stat, change) => {
//   if (stat === 'weapons') {
//     const newValue = state.weapons + change;
//     dispatch({ type: 'UPDATE_WEAPONS', payload: newValue });
//   } else if (stat === 'lifeSupport') {
//     const newValue = state.lifeSupport + change;
//     dispatch({ type: 'UPDATE_LIFESUPPORT', payload: newValue });
//   } else if (stat === 'power') {
//     const newValue = state.power + change;
//     dispatch({ type: 'UPDATE_POWER', payload: newValue });
//   } else if (stat === 'engines') {
//     const newValue = state.engines + change;
//     dispatch({ type: 'UPDATE_ENGINES', payload: newValue });
//   }
// };

// Object literal refactor
// only call dispatch once

const modifyStat = (stat, change) => {
  const state = null;
  const buildModifier = {
    weapons: {
      payload: state.weapons + change,
      type: 'UPDATE_WEAPONS',
    },
    weapons: {
      payload: state.weapons + change,
      type: 'UPDATE_WEAPONS',
    },
    weapons: {
      payload: state.weapons + change,
      type: 'UPDATE_WEAPONS',
    },
    weapons: {
      payload: state.weapons + change,
      type: 'UPDATE_WEAPONS',
    },
  };
};
