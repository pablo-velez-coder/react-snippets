import { useState, useRef } from 'react'
import CodeBlock from '../code-block'
import { Collapse } from '../collapse'
import styles from './styles.module.scss'
import {useIntersection} from '../../../hooks/useIntersection'

const PageContent = ({data}) => {

    const refs = useRef([]);

    const handleScroll =  ref =>{
        ref.scrollIntoView()
    }

    return (
        <div className={styles.pageContent}>
            <div className={styles.pageContentLeft}>
            <h1>{data.title}</h1>
        {data.data.map(item => (
            <div
           
            ref={(element) => {
                refs.current[item.id] = element;
              }}
/*             style={{background: item.title ===  selectedRef ? 'red': ''}} */
            className={styles.pageContentLeftData} key={item.id}>
                <h2>{item.id}. {item.title}</h2>
                <p>{item.description}</p>
                <div>
                    {item.items ? (
                        item.items.map(({id,title,code})=> (
                            <Collapse key={id} title={id +'. '+ title}>
                                <CodeBlock>
                                    {code}
                                </CodeBlock>
                        </Collapse>
                        ))
                    ): (
                        <CodeBlock>
                            {item.code}
                        </CodeBlock>
                    )}
                </div>
            </div>
        ))}
        </div>
        <div
         className={styles.pageContentRight}>
            {data.data.map(item => (
                <div
                onClick={()=>handleScroll(refs.current[item.id])}
                className={styles.refItem} key={item.id}>
                    {item.title}
                </div>
            ))}

        </div>
        </div>
    )
}

export default PageContent
