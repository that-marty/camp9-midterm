import React from 'react';
import { useState } from 'react';



interface Props {
  active: boolean;
  onClick: {};
}
function PaginationButton<Props>() {
const [state, setState] = useState(1);
  const paginationNumber: number = 0;
  let backgroundcolour="bg-[#FFFFFF/40]"
  
  return(
    <div>
for (let i=1; i<5;i++){
      <button
        active={true}
        onClick={e => {
          setState(paginationNumber);
        }}
        className="w-8 h-8 {backgroundcolour} rounded-sm">
      
        <p>{paginationNumber}</p>
        </button>
        </div>}

  if (state === paginationNumber){backgroundcolour="bg-[#FFB43A]"}
)

export default PaginationButton;
