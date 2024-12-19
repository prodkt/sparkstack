import React, { useState } from 'react';
import { useRiveFile } from '@rive-app/react-canvas';

// Custom Wrapper component to display the Rive animation
const RiveAnimation = ({ riveFile }) => {
  const { RiveComponent } = useRive({
    riveFile,
    autoplay: true
  });

  return <RiveComponent/>;
};

function App() {
  const { riveFile, status } = useRiveFile({
    src: 'https://cdn.rive.app/animations/myrivefile.riv',
  });

  const [instanceCount] = useState(5); // Number of RiveAnimation components to render

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Failed to load Rive file.</div>;
  }

// Each RiveAnimation component uses the RiveFile we loaded earlier, so it is only fetched and initialized once
 return (
      <div className="App">
        <header className="App-header">Rive Instances</header>
        <div className="rive-list">
          {Array.from({ length: instanceCount }, (_, index) => (
            <RiveAnimation key={`rive-instance-${index}`} riveFile={riveFile} />
          ))}
        </div>
      </div>
    );

}

export default App;
