import React, {Component} from "react";

class App extends Component{
    render() {
        return(
            // JSX
           <ul>
               <li>{false?'Hello React':'哈喽React'}</li>
               <li>React Learning</li>
           </ul>
        )
        // var child1 = React.createElement('li',null,'Hello React')
        // var child2 = React.createElement('li',null,'React Learning')
        // var root = React.createElement('ul',{className:'my-list'},child1,child2)
    }
}
export default App
