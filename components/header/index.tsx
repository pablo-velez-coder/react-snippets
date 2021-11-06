import styles from './styles.module.scss'
import {MenuOutlined, UserOutlined} from '@ant-design/icons'
import SearchInput from '../common/search-input'
import { UiContext } from '../../context/ui/uiContext'
import { useContext } from 'react'

const Header = () => {

    const {toggleMenu} = useContext(UiContext)

    return (
        <div className={styles.header}>
            <div className={styles.headerLeft}>
               <p> React Snippets</p>
            </div>
            <div className={styles.headerLeftMobile}>
            <div 
            className={styles.headerLeftMobileMenu}
            onClick={()=> toggleMenu()}>
            <MenuOutlined />
            </div>
            </div>
            <div className={styles.headerMiddle}>
                <p className={styles.headerMiddleTitle}>React Snippets</p>
               <SearchInput />
            </div>
            <div className={styles.headerRight}>
            <UserOutlined
            
            style={{color:'#fff',fontSize:'1rem'}}
            />
            </div>
        </div>
    )
}

export default Header
