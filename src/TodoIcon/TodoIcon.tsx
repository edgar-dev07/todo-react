import './TodoIcon.css';

import CheckSVG from './check.svg?react';
import DeleteSVG from './delete.svg?react';
import type { TodoIconProps } from './TodoIcon.types';


const typeIcon = {
        'check': (color: string) => <CheckSVG className="Icon-svg" fill={color} />,
        'delete': (color: string) => <DeleteSVG className="Icon-svg" fill={color} />
    }

function TodoIcon({ type , color, onClick }: TodoIconProps) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`} onClick={onClick}>
            {typeIcon[type] (color)}
        </span>
    )
}

export { TodoIcon };