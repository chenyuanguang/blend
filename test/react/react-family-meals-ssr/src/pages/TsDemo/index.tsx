import React from 'react';
import { connect } from 'react-redux';

import style from './index.module.less';
import Child from './child';

const HooksDemo: React.FC<any> = (props) => {
    return (
        <div className={style.app}>
            <h3>ts示例</h3>
            <Child num={32} />
        </div>
    );
};
export default connect((state) => state)(HooksDemo);
