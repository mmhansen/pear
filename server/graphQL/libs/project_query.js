import ProjectModel from '../../models/project'

export default (search) => {
  return ProjectModel
          .find(search)
          .exec()
}
