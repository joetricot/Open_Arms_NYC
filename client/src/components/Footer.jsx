import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <section className="props">
                    <h3>Sharing is caring!</h3>
                    <button>Facebook</button> 
                    <button>Twitter</button> 
                </section>

                <section className="copyright">
                    <div>&copy; 2017 Open Arms - NYC</div>
                    <div>made with ❤️ by Julia, Rana, Joe & Mark</div>
                </section>
            </footer>
        )
    }
}

export default Footer;
