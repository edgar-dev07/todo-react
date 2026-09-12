
import { TodoIcon } from "./TodoIcon"
import type { CompleteIconProps } from "./CompleteIcon.types"


function CompleteIcon({ onComplete, completed }: CompleteIconProps) {
    return (
        <TodoIcon
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onComplete}     
        />
    )
}

export {CompleteIcon}