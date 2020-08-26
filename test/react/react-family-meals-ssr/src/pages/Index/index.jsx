import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import c from 'classnames';
import useLocales from '@locales';
import style from './index.module.css';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tec: null,
        };
    }

    componentDidMount() {
        import('~/package.json').then((data) => {
            this.setState({ tec: data });
        });
    }

    render() {
        const { tec } = this.state;
        return (
            <div className={style.index}>
                <h2 className={style.title}>React 全家桶</h2>
                <h3 className={style.desc}>
                    基于blend-cli脚手架生成React的全家桶项目
                </h3>
                <section className={style.section}>
                    <h4>核心工具</h4>
                    <ul>
                        <li>redux全局数据管理</li>
                        <li>router的jsx配置与config配置可选配置</li>
                        <li>mock数据集成</li>
                        <li>基于axios的service集成</li>
                        <li>rem配置</li>
                        <li>样式全局配置与局部配置</li>
                        <li>react-hooks使用模板</li>
                        <li>基于react-hooks自定义hooks实现局部的数据通讯</li>
                    </ul>
                </section>
                <section className={style.section}>
                    <h4>案例展示</h4>
                    <ul>
                        <li>
                            <Link to="/redux-demo">redux使用案例</Link>
                        </li>
                        <li>
                            <Link to="/hooks-demo">hooks使用案例</Link>
                        </li>
                        <li>
                            <Link to="/ts-demo">ts使用案例</Link>
                        </li>
                    </ul>
                </section>
                <section className={c(style.section, style.packages)}>
                    <h4>核心依赖</h4>
                    <ul>
                        {Object.entries(tec?.dependencies || {}).map(
                            (i, index) => {
                                console.log(i);
                                return (
                                    <li key={i[0]}>
                                        <span>{i[0]}</span>
                                        <i>{i[1]}</i>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </section>
                <section
                    className={c(
                        style.section,
                        style.packages,
                        style.packages_dev
                    )}
                >
                    <h4>开发依赖</h4>
                    <ul>
                        {Object.entries(tec?.devDependencies || {}).map(
                            (i, index) => {
                                console.log(i);
                                return (
                                    <li key={i[0]}>
                                        <span>{i[0]}</span>
                                        <i>{i[1]}</i>
                                    </li>
                                );
                            }
                        )}
                    </ul>
                </section>
            </div>
        );
    }
}

export default connect((state) => {
    // 获取多语言使用
    const [$$, local] = useLocales();
    return { ...state, $$, local };
})(Index);
