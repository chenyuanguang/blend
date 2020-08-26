import React, { PureComponent } from 'react';
import { actions, ADDNUM } from '../redux';

export default class Cnum extends PureComponent {
    handle() {
        const { dispatch } = this.props;
        dispatch(actions[ADDNUM]());
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.handle.bind(this)}>
                    累加redux的num值
                </button>
            </div>
        );
    }
}
