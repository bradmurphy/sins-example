import { v4 as uuidv4 } from 'uuid';

const data = {
  sins: [
    {
      value: false,
      label: 'Default Sin 1',
      uid: uuidv4(),
    },
    {
      value: true,
      label: 'Default Sin 2',
      uid: uuidv4(),
    },
  ],
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

export default data;
