import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cn from 'classnames';
import { useSelector } from 'react-redux';
import { faPencil, faEraser, faRotateRight, faRotateLeft, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';
import { useDispatch } from 'react-redux';
import { menuItemClick, actionItemClick } from '@/slice/menuSlice';
import { MENU_ITEMS } from '@/constant';

const Menu = () => {
    const dispatch = useDispatch();
    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const handleMenuClick = (itemName) => {
        dispatch(menuItemClick(itemName))

    }
    const handleActionClick = (itemName) => {
        dispatch(actionItemClick(itemName))

    }
    return (
        <div className={styles.menuContainer}>

            <div className={cn(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.PENCIL})} onClick={() => handleMenuClick(MENU_ITEMS.PENCIL)}>
                <FontAwesomeIcon icon={faPencil} className={styles.icon} />
            </div>
            <div className={cn(styles.iconWrapper, {[styles.active]: activeMenuItem === MENU_ITEMS.ERASER})} onClick={() => handleMenuClick(MENU_ITEMS.ERASER)} >
                <FontAwesomeIcon icon={faEraser} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper} onClick={() => handleActionClick(MENU_ITEMS.UNDO)}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper} onClick={() => handleActionClick(MENU_ITEMS.REDO)}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icon} />
            </div>
            <div className={styles.iconWrapper} onClick={() => handleActionClick(MENU_ITEMS.DOWNLOAD)}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icon} />
            </div>
        </div>
    )
}

export default Menu;