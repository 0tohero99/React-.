import React from 'react';

const Footer = () => {
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
                <div style={footerStyle.div}>&copy; New_Learner 2025  </div>
            </footer>
           
        </>
    )
}
export default Footer;