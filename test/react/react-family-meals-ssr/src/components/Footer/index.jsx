import React from 'react';
import styles from './index.module.less';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <ul>
                <li>
                    <a
                        href="https://github.com/chenyuanguang/react-template/tree/react-family-meals"
                        target="black"
                    >
                        github
                    </a>
                </li>
                <li />
                <li>
                    <a
                        href="https://github.com/chenyuanguang/blend-cli"
                        target="black"
                    >
                        blend-cli
                    </a>
                </li>
            </ul>
        </footer>
    );
}
