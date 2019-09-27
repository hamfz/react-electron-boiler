import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
          <div className="hello">
              <h1>Hello React!</h1>
          </div>

          <p>
              If you are trying to build Electron apps using React, or you just
              want to play around with them, feel free to use this
              seed as a starting point.
          </p>

          <p>
              Pay attention to how everything inside src/ folder is bundled
              into build/ folder, how global and scoped CSS work, how to compose
              React components, or simply how Webpack changes relative
              image paths to public paths after bundling the assets.
          </p>

      </div>
    )
  }
}
