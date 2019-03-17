import * as React from "react";



class Navbar extends React.Component {
    state = {
        navCollapsed: true
    }

    _onToggleNav = () => {
        this.setState({ navCollapsed: !this.state.navCollapsed })
    }

    render () {
        const {navCollapsed} = this.state

        return (
            <nav className='navbar navbar-default'>
                <div className='navbar-header'>
                   <a className='navbar-brand' href='/'> <i className="fa fa-home"></i>  Acasa</a>
                    <a className='navbar-brand' href='/unitatiMedicale'>Unitati medicale</a>
                    <a className='navbar-brand' href='/medici'>Medici</a>

                    {/*<button*/}
                        {/*aria-expanded='false'*/}
                        {/*className='navbar-toggle collapsed'*/}
                        {/*onClick={this._onToggleNav}*/}
                        {/*type='button'*/}
                    {/*>*/}
                        {/*<span className='sr-only'>Toggle navigation</span>*/}
                        {/*<span className='icon-bar'></span>*/}
                        {/*<span className='icon-bar'></span>*/}
                        {/*<span className='icon-bar'></span>*/}
                    {/*</button>*/}
                </div>
                <div
                    className={(navCollapsed ? 'collapse' : '') + ' navbar-collapse'}
                >

                </div>
            </nav>
        )
    }
}

export default Navbar;