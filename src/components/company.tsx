// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { getCategory } from '../api';

// interface Speaker {
//   name: string;
//   org: string;
// }

// interface Session {
//   id: string;
//   name: string;
//   speaker: Speaker;
// }

// interface Category {
//   name: string;
//   sessions: Session[];
// }

// export default function Category() {

//   const { catId } = useParams<{ catId: string }>();

//   const category: Category | undefined = getCategory(catId);
//   return (
//     <>
//       <h2>{category?.name} Sessions</h2>

//       <ul className="session-list">
//         {category?.sessions.map(session => (
//           <li className="session" key={session.id}>
//             <p className="session-name">{session.name}</p>
//             <p>
//               {session.speaker.name} | {session.speaker.org}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }
 export {}