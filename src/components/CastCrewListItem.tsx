import React from 'react';

type Props = {
  url: string;
  actorName: string;
  character: string;
};

function CastCrewListItem(props: Props) {
  return (
    <div className="flex m-4 gap-4">
      <img
        src={props.url}
        alt={props.actorName}
        className="bg-gray-300 w-16 h-16 object-cover"
      />
      <div>
        <h2 className="typography-primary text-white">{props.actorName}</h2>
        <h3 className="typography-description text-white-dimmed">
          {props.character}
        </h3>
      </div>
    </div>
  );
}

export default CastCrewListItem;
