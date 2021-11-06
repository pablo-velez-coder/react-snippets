import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.scss'

interface MenuItemProps {
    title?:string;
    path?:string;
    mainPath?:string;
    isSubMenu?:boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({title, path,mainPath, isSubMenu}) => {
    const router = useRouter()
    const totalPath = `${isSubMenu ? '/' +mainPath : '' }/${path}`
    const samePath = router.asPath === totalPath

    return (
        <Link
        href={totalPath}
       >
          <a  className={`${styles.menuItem} ${samePath ? styles.active : ''}`}>{title}</a> 
        </Link>
    )
}

