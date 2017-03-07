import React, { Component, PropTypes } from 'react';
import throttle from '../store/throttle'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: props.list
        }
    }
    
    componentDidMount() {
        // window.onscroll = throttle(()=> {
        //     console.log($(window).scrollTop())
        // }, 50, 100)
    }
    
    render() {
        let fixedStyle = {
            position: 'fixed'
        }
        return (
            <nav className="navbar navbar-default" style={fixedStyle}>
                <div className="container">
                    <div className="navbar-header">
                        <a href="/" className="navbar-brand">Ayr</a>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            {
                                this.state.list.map((item,index) => {
                                    let {name, tag, select} = item
                                    return (
                                        <li className={ select ? "active": '' } key={index} onClick={this.navChangeHandle.bind(this, item)}>
                                            <a href={`#${tag}`}>{name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }

    navChangeHandle(item){
        let {list} = this.state
        let {tag} = item
        list.map(item => {
            if(item.tag === tag){
                item.select = true
            } else {
                item.select = false
            }
        })
        this.setState({
            list: list
        })
    }
}

Navbar.propTypes = {
    list: PropTypes.array.isRequired,
};

export default Navbar