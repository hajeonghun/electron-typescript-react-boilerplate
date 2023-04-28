import React from 'react';
// import licenses from "@/licenses.json"
function App() {
    (async function(){
        const licenses = await import('@/licenses.json')
    console.log({licenses})
    })()
    // console.log({licenses})

    return (
    <>
      <div>HI</div>
      <div>HI</div>
      <div>HI</div>
      <div>HI</div>
    </>
  );
}

export default App;
