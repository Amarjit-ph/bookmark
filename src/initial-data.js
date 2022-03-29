const initialData = {
  tasks: {
    't1': { id: 't1', content: 'Facebook', URL:"https://facebook.com",description:"Connect and share with the people in your life." },
    't2': { id: 't2', content: 'Instagram', URL:"https://instagram.com" ,description:"Photo and video sharing social networking service"},
    't3': { id: 't3', content: 'Github',URL:"https://github.com/" ,description:"Where the world builds software"},
    't4': { id: 't4', content: 'Trello',URL:"https://trello.com/" ,description:"Trello helps teams move work forward"},
    't5': { id: 't5', content: 'Cousera',URL:"https://www.coursera.org/in" ,description:"Learn Without Limits"},
    't6': { id: 't6', content: 'Udemy',URL:"https://www.udemy.com/" ,description:"Learn anything anywhere"},
    't7': { id: 't7', content: 'Vercel',URL:"https://vercel.com/" ,description:"Develop. Preview. Ship."},
    't8': { id: 't8', content: 'Evernote',URL:"https://evernote.com/" ,description:"Tame your work, organize your life"},
    't9': { id: 't9', content: 'HackerRank',URL:"https://www.hackerrank.com/" ,description:"Matching developerswith great companies."}
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Personal',
      taskIds: ['t1','t2','t5','t6'],
    },
    'column-2': {
      id: 'column-2',
      title: 'Professional',
      taskIds: ['t4','t8'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Developer',
      taskIds: ['t3','t7','t9'],
    },
  },

  // Facilitate reordering of the columns
  columnOrder: ['column-1','column-2','column-3'],
};

export default initialData;