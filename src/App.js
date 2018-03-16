
import React from "react";
import ReactDOM from "react-dom";


if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

const App = () => {
  return (
    <div>
      <p className="example">sssssssssa</p>
    </div>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept(() => {
      renderApp(App)
  })
}

