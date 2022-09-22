import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, frontSprite, backSprite}) {
  const [isFront, setIsFront] = useState(true)

  function handleCardDisplay() {
    setIsFront(isFront => !isFront)
  }

  return (
    <Card>
      <div onClick={handleCardDisplay}>
        <div className="image">
          <img src={isFront ? frontSprite : backSprite} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
