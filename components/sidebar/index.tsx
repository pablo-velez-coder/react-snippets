import styles from './styles.module.scss'
import {MenuItem} from './menu-item'
import { UiContext } from '../../context/ui/uiContext'
import { useContext, useEffect, useRef } from 'react'
import { Collapse } from '../common/collapse'
const Sidebar = () => {
  const arr = [
    {id:1, title:'Reusable components', path:'reusable-components',items:[
      {id:1, title:'Forms', path:'forms', isSubMenu:true},
      {id:2, title:'Button', path:'button', isSubMenu:true},
      {id:3, title:'Collapse', path:'collapse', isSubMenu:true},
      {id:4, title:'Dropdown', path:'dropdown', isSubMenu:true},
      {id:5, title:'Tooltip', path:'tooltip', isSubMenu:true},
      {id:6, title:'Checkbox', path:'checkbox', isSubMenu:true},
      {id:7, title:'Slider', path:'slider', isSubMenu:true},
      {id:8, title:'Tabs', path:'tabs', isSubMenu:true},
      {id:9, title:'Input', path:'input', isSubMenu:true},
      {id:10, title:'Autocomplete', path:'autocomplete', isSubMenu:true},
      {id:11, title:'Grid', path:'grid', isSubMenu:true},
      {id:12, title:'Card', path:'card', isSubMenu:true},
      {id:13, title:'Modal', path:'modal', isSubMenu:true},
      {id:14, title:'Sidedrawer', path:'Sidedrawer', isSubMenu:true},
      {id:15, title:'Table', path:'table', isSubMenu:true},
      {id:16, title:'Switch', path:'switch', isSubMenu:true},
      {id:17, title:'Spinner', path:'spinner', isSubMenu:true},
      {id:18, title:'Radio', path:'radio', isSubMenu:true},
      {id:19, title:'Menu', path:'menu', isSubMenu:true},
      {id:20, title:'Header', path:'header', isSubMenu:true},
      {id:21, title:'Layout', path:'layout', isSubMenu:true},
    ]},
    {id:2, title: 'Hooks', path:'hooks', items : [
      {id:1, title:'useState', path:'use-state', isSubMenu:true},
      {id:2, title:'useEffect', path:'use-effect', isSubMenu:true},
      {id:3, title:'useCallback', path:'use-callback', isSubMenu:true},
      {id:4, title:'useRef', path:'use-ref', isSubMenu:true},
  ]},
    {id:3, title: 'Custom Hooks', path:'custom-hooks', items: [
      {id:1, title:'useEventListener', path:'useEventListener', isSubMenu:true},
      {id:2, title:'useClickOutside', path:'useClickOutside', isSubMenu:true},
      {id:3, title:'useWindowSize', path:'useWindowSize', isSubMenu:true},
      {id:4, title:'useToggle', path:'useToggle', isSubMenu:true},
      {id:5, title:'usePrevious', path:'usePrevious', isSubMenu:true},
      {id:6, title:'useOnScreen', path:'useOnScreen', isSubMenu:true},
      {id:7, title:'useOnlineStatus', path:'useOnlineStatus', isSubMenu:true},
      {id:8, title:'useUpdateEffect', path:'useUpdateEffect', isSubMenu:true},
      {id:9, title:'useArray', path:'useArray', isSubMenu:true},
      {id:10, title:'useDebounce', path:'useDebounce', isSubMenu:true},
    ]},
    {id:4, title: 'Redux', path:'redux'},
    {id:5, title: 'Context', path:'context'},
    {id:6, title: 'GraphQL', path:'graphql'},
    {id:7, title: 'MERN', path:'mern'},
    {id:8, title: 'CSS miscellaneous', path:'css-miscellaneous', items:[
      {id:1, title:'Customize scrollthumb',path:'scroll-thumb', isSubMenu:true}
    ]},
  ]

  const {isMobileMenuOpen} = useContext(UiContext)
  const menuRef = useRef<HTMLDivElement>(null)

  return (
    <div 
    ref={menuRef}
    className={isMobileMenuOpen ? styles.sidebarOpen:styles.sidebar}>
         {arr.map(item => {
          return item.items ?  (
            <Collapse key={item.id} title={item.title}>
              {item.items.map(menuitem =>(
                <MenuItem key={menuitem.id}
                mainPath={item.path}
                {...menuitem} />
              ))}
            </Collapse>
          ) :  (
            <MenuItem key={item.id} {...item} />
           )
         }
          
         )}

      </div>
    )
}

export default Sidebar
