import React from 'react';
import { connect } from 'react-redux';
import style from './index.module.less';
import useDemoReducer, { DemoContext } from './store';
import ViewCom from './ViewCom';
import DispatchCom from './DispatchCom';

const HooksDemo = () => {
    const reducer = useDemoReducer({ age: 10 });
    const [state, reset] = reducer;
    console.log(state, reset);

    return (
        <DemoContext.Provider value={reducer}>
            <ul className={style.ul}>
                <ViewCom />
                <DispatchCom />
            </ul>
        </DemoContext.Provider>
    );
};
export default connect((state) => state)(HooksDemo);
