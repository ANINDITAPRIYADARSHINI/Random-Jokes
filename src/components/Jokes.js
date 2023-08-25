import React from 'react';

export default function Jokes(props) {
  const [isShown, setIsShown] = React.useState(false);

  function toggleShown() {
    setIsShown((prevShown) => !prevShown);
  }

  return (
    <div>
      {props.Setup && <h3>{props.Setup}</h3>}
      {isShown && <h5>{props.Punchline}</h5>}
      <button onClick={toggleShown}>
        {isShown ? 'Hide' : 'Show'} Punchline
      </button>
      <hr />
    </div>
  );
}
