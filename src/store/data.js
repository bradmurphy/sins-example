import { v4 as uuidv4 } from 'uuid';

const defaultSins = [
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
];

const data = {
  defaultSins: defaultSins,
  sins: defaultSins,
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

export default data;
