import delete_tag from './delete_tag'
import add_tag from './add_tag'
import drag_tag from './drag_tag'
import handle_change from './handle_change'

export const deleteTag = delete_tag
export const addTag = add_tag
export const dragTag = drag_tag
export const primarySearch = handle_change('PRIMARY_SEARCH')('primary')
export const secondarySearch = handle_change('SECONDARY_SEARCH')('secondary')
