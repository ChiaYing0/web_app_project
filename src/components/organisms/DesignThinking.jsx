import React from 'react';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Label from '../atoms/Label';
import DesignThinkingCard from '../molecules/DesignThinkingCard';

// const DesignThinking = () => (
//   <div className="p-4">
//     <h2 className="text-2xl font-bold mb-4">Design Thinking</h2>
//     <DesignThinkingCard
//       title="What are the key principles of design?"
//       content="Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. It involves understanding the needs and perspectives of users, generating innovative ideas, and rapidly prototyping and testing solutions."
//     />
//     <div className="mt-4">
//       <Label>Ask Me anything...</Label>
//       <Input placeholder="Type your question" />
//       <div className="flex justify-end mt-2">
//         <Button label="Submit" onClick={() => {}} />
//       </div>
//     </div>
//   </div>
// );


const DesignThinking = () => (
    <div className="p-5 bg-white rounded-xl">
      <h2 className="text-2xl font-bold mb-5">Design Thinking</h2>
      <DesignThinkingCard
        title="What are the key principles of design?"
        content="Design thinking is a problem-solving approach that emphasizes empathy, creativity, and collaboration. It involves understanding the needs and perspectives of users, generating innovative ideas, and rapidly prototyping and testing solutions."
      />
      <div className="mt-5">
        <Label>Ask Me anything...</Label>
        <Input placeholder="Type your question" />
        <div className="flex justify-end mt-3">
          <Button label="Submit" onClick={() => {}} />
        </div>
      </div>
    </div>
  );

export default DesignThinking;
