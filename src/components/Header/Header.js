import React from 'react';
require('./styles.header.scss');

class Header extends React.Component {
    render() {
        return (
            <div className="header-topbar">
                My Travel Blog
                <section>
                    Vivek Krishna Mohan
                </section>
            </div>
        );
    }
}
export default Header;