
import { TodoIcon } from "../TodoIcon/TodoIcon"
import type { DeleteIconProps } from "./DeleteIcon.types"

function DeleteIcon({ onDelete }: DeleteIconProps) {
    return (
        <TodoIcon
            type="delete"
            color="red"
            onClick={onDelete}
        
        />
    )
}

export {DeleteIcon}