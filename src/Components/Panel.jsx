import React, { Component } from 'react';
import App from '../Apps/Child/tools/src/App';
/*import { App } from '../../src/Apps/Child/tools/dist/childApp'*/

class Panel extends Component {
    render() {
        return (
            <div>
                <App store={this.props.store} />
            </div>
        );
    }
}

export default Panel;