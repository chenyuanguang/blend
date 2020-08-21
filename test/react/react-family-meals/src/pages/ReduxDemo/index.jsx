import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Cnum from '@components/cnum';
import style from './index.module.css';

class Index extends PureComponent {
    render() {
        const { props } = this;
        const { num } = this.props;
        return (
            <div className={style.index}>
                <section>
                    显示redux中数据：
                    {num}
                </section>
                <Cnum {...props} />
            </div>
        );
    }
}
export default connect((state) => state)(Index);
