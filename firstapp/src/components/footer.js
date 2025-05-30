import React from 'react';

const Footer = (props) => {
    const { month, year } = props;
    const footerStyle = {
        div: {
            textAlign: 'center',
            padding: '20px',
            backgroundColor: '#f1f1f1'

        }
    }
    return (
        <>
            {/* inline css 👇 */}
            <footer style={{ textAlign: 'center', marginTop: "30px", backgroundColor: '#f1f1f1' }}>
                {/* intenal css 👇 */}
                {/* <div style={footerStyle.div}>&copy; New_Learner {props.month}  {props.year} </div> */}

                {/* destructuring */}
                <div style={footerStyle.div}>&copy; New_Learner {month}  {year} </div>
            </footer>

        </>
    )
}
export default Footer;


//class components ://

// import react, { Component } from "react";

// class Footer extends Component {
//     render() {
//         const { month, year } = this.props; // destructuring props.


//         return (
//             <>
//                 <footer style={{ textAlign: 'center', marginTop: "30px", backgroundColor: '#f1f1f1' }}>
//                     <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f1f1f1' }}>&copy; New_Learner {this.props.month}  {this.props.year}  </div>


//                 </footer>
//             </>
//         )
//     }
// }
// export default Footer;