import React, {
    useState,
    useEffect,
    useRef,
    useMemo,
    useCallback,
} from 'react';
import { connect } from 'react-redux';
import ContextStore from '@components/ContextStore';
import style from './index.module.less';
let a = 1;
const HooksDemo = () => {
    const [num, setnum] = useState(1);

    const reft = useRef(1);
    const [sec, setsec] = useState(reft.current);
    useEffect(() => {
        // 执行一次
        const t = setInterval(() => {
            reft.current += 1;
            setsec(reft.current);
        }, 1000);
        return () => {
            // 组件卸载时销毁
            clearInterval(t);
        };
    }, []);

    const [min, setmin] = useState(0);
    useEffect(() => {
        // 依赖time计算分钟
        setmin(Math.floor(sec / 3));
    }, [sec]);

    // 依赖min自动计算小时
    const hour = useMemo(() => Math.floor(min / 3), [min]);

    const [result, setresult] = useState(0);
    const changeReducer = useCallback(() => {
        setresult(min);
    }, hour);
    return (
        <div className={style.app}>
            <h3>hooks示例</h3>
            <section className={style.section}>
                <h4>useState</h4>
                <ul>
                    <li>
                        <label htmlFor="num">数值</label>
                        <span id="num">{num}</span>
                        <button type="button" onClick={() => setnum(num + 1)}>
                            点击更新数值
                        </button>
                    </li>
                </ul>
            </section>
            <section className={style.section}>
                <h4>useEffect & useRef</h4>
                <ul>
                    <li>
                        <label htmlFor="">秒数</label>
                        <span>{sec}s</span>
                    </li>
                    <li>
                        <label htmlFor="">分钟</label>
                        <span>{min}m</span>
                    </li>
                </ul>
            </section>
            <section className={style.section}>
                <h4>useMemo（自动依赖某些字段计算结果）</h4>
                <ul>
                    <li>
                        <label htmlFor="">小时</label>
                        <span>{hour}h</span>
                    </li>
                </ul>
            </section>
            <section className={style.section}>
                <h4>useCallback（当hour改变时重新定义函数）</h4>
                <ul>
                    <li>
                        <label htmlFor="">useCallback结果</label>
                        <span>{result}</span>
                        <button type="button" onClick={changeReducer}>
                            点击
                        </button>
                    </li>
                </ul>
            </section>
            <section className={style.section}>
                <h4>
                    useContext & useReducer
                    自定义Hooks实现局部store（多人开发避免redux过重问题）
                </h4>
                <ContextStore />
            </section>
        </div>
    );
};
export default connect((state) => state)(HooksDemo);
