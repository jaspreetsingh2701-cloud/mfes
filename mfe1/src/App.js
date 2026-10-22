import React, { Suspense } from 'react';

const MFE2App = React.lazy(() => import('mfe2/App'));

export function App() {
  return (
    <section>
      <h1>MFE1</h1>
      <Suspense fallback="MFE2 loading...">
        <MFE2App />
      </Suspense>
    </section>
  );
}

export default App;