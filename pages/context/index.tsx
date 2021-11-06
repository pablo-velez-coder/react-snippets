import {useEffect, useState} from 'react';
import { CopyOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import styles from './styles.module.scss';
import CodeBlock from '../../components/common/code-block';
import { Collapse } from '../../components/common/collapse';
import PageContent from '../../components/common/page-content';
import {data} from '../../data'

const ContextApi = () => {

    return (
        <PageContent
        data={data['context']}
        />
    )
}

export default ContextApi
