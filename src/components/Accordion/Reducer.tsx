type ActionType = {
    type: string
}

type StateType = {
    collapsed: boolean
}

const TOGGLE_CONSTANT = "TOGGLE-COLLAPSED"
export const reducer = (state: StateType, action: ActionType): StateType => {
    switch (action.type) {
        case TOGGLE_CONSTANT:
            state.collapsed = !state.collapsed
            return state
        default :
            throw new Error("sorry, bad action type")
    }
    return state
}