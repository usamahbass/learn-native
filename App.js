import React from 'react'

import Todo from './src/components'

import Splashscreen from './src/components/splash'

class App extends React.Component{
  
  state  = { 
    role : true
  }
  
  render(){
    setTimeout(()=>{
      this.setState({
          role:false
      })
  } ,5000)
  if (this.state.role) {
    return <Splashscreen/>
    
  }
    return (
      <Todo/>
    )
  }
}

export default App