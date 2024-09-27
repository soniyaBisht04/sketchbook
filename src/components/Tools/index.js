import { useSelector } from 'react-redux';
import styles from './index.module.css';
import { COLORS, MENU_ITEMS } from '@/constant';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { changeColor, changeBrushSize } from '@/slice/toolsSlice';
import { socket } from "@/socket";

const Tools = () => {
    const dispatch = useDispatch();

    const activeMenuItem = useSelector((state) => state.menu.activeMenuItem);
    const {color, size} = useSelector((state) => state.tools[activeMenuItem]);

    const showStrokeToolOptions = activeMenuItem === MENU_ITEMS.PENCIL;
    const showBrushToolOptions = activeMenuItem === MENU_ITEMS.PENCIL || MENU_ITEMS.ERASER;

    const updateBrushSize = (e) => {
        dispatch(changeBrushSize({item: activeMenuItem, size: e.target.value}));
        socket.emit('changeConfig', {color, size: e.target.value})
    }
    const updateColor = (newColor) => {
        dispatch(changeColor({item: activeMenuItem, color: newColor}))
        socket.emit('changeConfig', {color: newColor, size})
    }
    return (
        <div className={styles.toolboxContainer}>
            { showStrokeToolOptions &&  <div className={styles.toolItem}>
                <h5 className={styles.toolText}> STROKE COLOR</h5>
                <div className={styles.itemContainer}>
                    <div className={cn(styles.colorBox, {[styles.active]: color === COLORS.BLACK })} style={{backgroundColor: COLORS.BLACK}} onClick={() => updateColor(COLORS.BLACK)}/>
                    <div className={cn(styles.colorBox, {[styles.active]: color === COLORS.BLUE })} style={{backgroundColor: COLORS.BLUE}} onClick={() => updateColor(COLORS.BLUE)}/>
                    <div className={cn(styles.colorBox, {[styles.active]: color === COLORS.GREEN })} style={{backgroundColor: COLORS.GREEN}} onClick={() => updateColor(COLORS.GREEN)}/>
                    <div className={cn(styles.colorBox, {[styles.active]: color === COLORS.ORANGE })} style={{backgroundColor: COLORS.ORANGE}} onClick={() => updateColor(COLORS.ORANGE)}/>
                    <div className={cn(styles.colorBox, {[styles.active]: color === COLORS.RED })} style={{backgroundColor: COLORS.RED}} onClick={() => updateColor(COLORS.RED)}/>
                    <div className={cn(styles.colorBox, {[styles.active]: color === COLORS.YELLOW })} style={{backgroundColor: COLORS.YELLOW}} onClick={() => updateColor(COLORS.YELLOW)}/>
                </div>
            </div>}
           {
            showBrushToolOptions && <div className={styles.toolItem}> 
            <h5 className={styles.toolText}> BRUSH</h5>
            <div className={styles.itemContainer}>
                   <input type="range" min={1} max={10} step={1} onChange={updateBrushSize} value={size}/>
                </div>
            </div>
           }
            
        </div>
    )
}

export default Tools;