import { useState } from 'react';

const ExpandableContent = ({ initialContent, expandedContent }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div>
        {isExpanded ? expandedContent : initialContent}
      </div>
      <button onClick={toggleExpand} className='g-btn'>
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ExpandableContent;