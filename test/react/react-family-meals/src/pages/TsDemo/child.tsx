import React, { useState } from 'react';

import style from './index.module.less';

interface HooksDemoProps {
    num: number;
}

const HooksDemo: React.FC<HooksDemoProps> = () => {
    const [state]: [number, any] = useState(1);

    return (
        <section className={style.section}>
            <span>{state}</span>
        </section>
    );
};
export default HooksDemo;
