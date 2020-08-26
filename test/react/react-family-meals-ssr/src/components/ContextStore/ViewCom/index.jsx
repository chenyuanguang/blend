import React, { useContext } from 'react';
import { DemoContext } from '../store';

export default function ViewCom() {
    const [state] = useContext(DemoContext);
    return (
        <li>
            <label htmlFor="">num值：</label>
            <span>{state.num}</span>
            <label htmlFor="">age值：</label>
            <span>{state.age}</span>
        </li>
    );
}
