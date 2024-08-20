import './droplist.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

interface Props {
    itemList: Array<string>,
    selectedItem: string,
    setSelectedItem: Function
}

export default function DropList({ itemList, selectedItem, setSelectedItem } : Props) {
    const [listVisible, setListVisible] = useState(false);

    return (
        <div className='outer-container'  onClick={() => setListVisible(!listVisible)} >
            <div className='selected-container' >
                <p>{selectedItem}</p>
                <FontAwesomeIcon icon={faCaretDown} size='2xl' className='down-arrow' />
            </div>
            {listVisible && (
            <div className='list-container' >
                {itemList.map((item) => {
                    if (item !== selectedItem) {
                        return (<p className='list-item' onClick={() => setSelectedItem(item)} >{item}</p>);
                    }
                })}
            </div>
        )}
        </div>
    );
}