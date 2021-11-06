import { useEffect, useState } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styles from './styles.module.scss';

interface CodeblockProps {
    children?: React.ReactNode;
}

const CodeBlock: React.FC<CodeblockProps> = ({children}) => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
         setTimeout(() => {
            isCopied && setIsCopied(false) 
        }, 2000);
    }, [isCopied])

    return (
        <div className={styles.codeblock}>
                <div className={styles.codeblockCode}>
                    <div
                    onClick={()=>{
                        navigator.clipboard.writeText(`${children}`);
                        setIsCopied(true)}}
                    className={styles.codeblockCopy}>
                    <Tooltip
                    mouseLeaveDelay={isCopied ? 2 : 0.3}
                    title={isCopied ? 'copied!' :'copy'} trigger='hover'>
                    <CopyOutlined style={{color:'#fff', fontSize:'18px'}} />
                    </Tooltip>
                    </div>
                    <pre>
                        <code>
                        {children}
                        </code>
                    </pre>
                </div>
        </div>
    )
}

export default CodeBlock
