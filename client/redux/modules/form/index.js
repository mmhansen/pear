import delete_tag from './actions/delete_tag'
import add_tag from './actions/add_tag'
import drag_tag from './actions/drag_tag'
import handle_change from './actions/handle_change'
import handle_change_2 from './actions/handle_change_2'
// tags
export const deleteTag = delete_tag
export const addTag = add_tag
export const dragTag = drag_tag
// search
export const primarySearch = handle_change('PRIMARY_SEARCH')('primary')
export const secondarySearch = handle_change('SECONDARY_SEARCH')('secondary')
// mail
export const textareaChange = handle_change('MAIL_CHANGE')('mail')
// project message
export const projectMessageChange = handle_change('PROJECT_MESSAGE')('project_message')
// new project
export const handleProjectFormChange = handle_change_2('NEW_PROJECT')
