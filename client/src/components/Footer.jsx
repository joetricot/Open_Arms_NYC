import React, { Component } from 'react';

class Footer extends Component {



    render() {
        return (
            <footer className="footer">
                <section className="props">
                    <h3>Sharing is caring!</h3>
                    <small>FOLLOW US</small>
                    <br />
                    <div className="social">Facebook</div>
                    <div className="social">Twitter</div>
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
