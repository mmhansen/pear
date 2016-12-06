import delete_tag from './actions/delete_tag'
import add_tag from './actions/add_tag'
import drag_tag from './actions/drag_tag'
import handle_change from './actions/handle_change'

export const deleteTag = delete_tag
export const addTag = add_tag
export const dragTag = drag_tag
export const primarySearch = handle_change('PRIMARY_SEARCH')('primary')
export const secondarySearch = handle_change('SECONDARY_SEARCH')('secondary')
