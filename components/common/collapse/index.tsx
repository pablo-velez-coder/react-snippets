import { DownOutlined, UpOutlined } from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.scss'

interface Collapseprops {
    title?:string;
    children?: React.ReactNode;
}

export const Collapse: React.FC<Collapseprops> = ({title, children}) => {
    const [openCollapse, setOpenCollapse] = useState(false)
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState<number | undefined>(
        openCollapse ? undefined : 0
      );
      
    useEffect(() => {
    if (openCollapse) setHeight(ref.current?.getBoundingClientRect().height+ 30);
    else setHeight(0);
    }, [openCollapse]);

    return (
        <div  className={styles.collapse}>
            <div
            onClick={()=> setOpenCollapse(!openCollapse)}
            className={styles.collapseTitle}>
                <span>{title}</span>
                <span>
                    {openCollapse ?
                     <DownOutlined style={{fontWeight: 800}} />  : 
                      <UpOutlined style={{fontWeight: 800}} />}
                </span>
            </div>
          <div
          style={{height}}
          className={styles.collapseSubs}
          >
              <div  ref={ref}>
                {children}
              </div>
            </div>
        </div>
    )
}


