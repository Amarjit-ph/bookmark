const initialData = {
  tasks: {
    't1': { id: 't1', content: 'Read book' },
    't2': { id: 't2', content: 'Watch News' },
    't3': { id: 't3', content: 'Charge my phone' },
    't4': { id: 't4', content: 'Cook dinner' },
    't5': { id: 't5', content: 'Clean my Room' },
    't6': { id: 't6', content: 'Development' },
    't7': { id: 't7', content: 'Meditate' },
    't8': { id: 't8', content: 'Workout'},
    't9': { id: 't9', content: 'Relax'}
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Technology',
      taskIds: ['t1','t2','t3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Personal',
      taskIds: ['t4','t5','t6'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Investment',
      taskIds: ['t7','t8','t9'],
    },
  },

  // Facilitate reordering of the columns
  columnOrder: ['column-1','column-2','column-3'],
};

export default initialData;