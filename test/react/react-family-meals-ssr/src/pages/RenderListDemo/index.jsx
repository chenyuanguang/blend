import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import style from './index.module.css';
import { getList } from '@services';
import { RenderListDemoActions, GETRENDERLISTDATA } from '@redux';

class RenderListDemo extends PureComponent {
    render() {
        const { props } = this;
        const { num } = this.props;
        console.log(props);
        return (
            <div className={style.index}>
                <section>sdfsdfas</section>
            </div>
        );
    }
}
RenderListDemo.loadData = (store) => {
    console.log('++++++++++++++++=');

    return store.dispatch(RenderListDemoActions[GETRENDERLISTDATA]());
};
export default connect((state) => state)(RenderListDemo);
