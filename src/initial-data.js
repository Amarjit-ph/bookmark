const initialData = {
  tasks: {
    't1': { id: 't1', content: 'Facebook', URL:"facebook.com" },
    't2': { id: 't2', content: 'Instagram', URL:"instagram.com"},
    't3': { id: 't3', content: 'Github' },
    't4': { id: 't4', content: 'Trello' },
    't5': { id: 't5', content: 'Cousera' },
    't6': { id: 't6', content: 'Udemy' },
    't7': { id: 't7', content: 'Vercel' },
    't8': { id: 't8', content: 'Evernote'},
    't9': { id: 't9', content: 'HackerRank'}
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Personal',
      taskIds: ['t1','t2','t3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Professional',
      taskIds: ['t4','t5','t6'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Developer',
      taskIds: ['t7','t8','t9'],
    },
  },

  // Facilitate reordering of the columns
  columnOrder: ['column-1','column-2','column-3'],
};

export default initialData;