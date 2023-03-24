// import React, { useState } from 'react';
// import { WithContext as ReactTags } from 'react-tag-input';

// const TagInput = () => {
//   const [tags, setTags] = useState<{ id: string, text: string }[]>([]);
//   const handleAddition = (tag) => {
//     setTags([...tags, tag]);
//   };
//   const handleDelete = (i) => {
//     const newTags = tags.filter((tag, index) => index !== i);
//     setTags(newTags);
//   };
//   const handleDrag = (tag, currPos, newPos) => {
//     const newTags = [...tags];
//     newTags.splice(currPos, 1);
//     newTags.splice(newPos, 0, tag);
//     setTags(newTags);
//   };
//   return (
//     <div>
//       <ReactTags
//         tags={tags}
//         handleDelete={handleDelete}
//         handleAddition={handleAddition}
//         handleDrag={handleDrag}
//         delimiters={[9, 13, 188]} // Tab, Enter, Comma
//         placeholder="Adicione uma tag e pressione Enter"
//       />
//     </div>
//   );
// };
// export default TagInput;









