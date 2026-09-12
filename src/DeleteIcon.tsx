
import { TodoIcon } from "./TodoIcon"
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