import React from 'react'
import Aux from '../Aux';
import styles from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideBar from '../../components/Navigation/SideBar/SideBar';

class Layout extends React.Component {

    state = {
        showSideBar: false
    }

    closeSideBar = () => {
        this.setState({
            showSideBar: false
        })
    }

    toggleSideBar = () => {
        this.setState((prevState) => {
            return { showSideBar: !prevState.showSideBar }
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.toggleSideBar}/>
                <SideBar closeSideBar={this.closeSideBar} show={this.state.showSideBar} />
                <main className={styles.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
}
export default Layout;
