import React, { useState } from "react"

import Layout from "../components/layout"

const greenBook = <span role="img" aria-label="emoji">📗</span>
const redBook = <span role="img" aria-label="emoji">📕</span>

// const TestPage = () => {
//   return (
//     <Layout>
//         {greenBook} {redBook}
//     </Layout>
//   )
// }

// export default TestPage

// function App() {
//     const [isShown, setIsShown] = useState(false);
  
//     return (
//       <div className="App">
//         <button
//           onMouseEnter={() => setIsShown(true)}
//           onMouseLeave={() => setIsShown(false)}>
//           {greenBook}
//         </button>
//         {isShown && (
//           <div>
//             {redBook}
//           </div>
//         )}
//       </div>
//     );
//   }
  
//   export default App;

//   class HoverableComponent extends React.Component {
//     constructor() {
//       super();
//       this.state = { text : this.props.text }
//     }
//     //set the text
//     onMouseover (e) {
//       this.setState({text : this.props.emoji })
//     }
//     //clear the text
//     onMouseout (e) {
//       this.setState({text : this.props.text })
//     }
//     render () {
//        const {text} = this.state;
//        return (
//          <li 
//            onMouseEnter={this.onMouseover.bind(this)}
//            onMouseLeave={this.onMouseout.bind(this)}>{text}</li>
//        )
//     }
//  };

// class Menu extends React.Component {
//     render () {
//         return (
//             <ul>
//                 <HoverableComponent text="teach" emoji="📚"/>
//             <ul/>
//         )
//     }

        

//  export default Menu;