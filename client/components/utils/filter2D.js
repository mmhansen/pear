/*
 * Primary Search:
 * age, scripting language
 * Secondary Search:
 * age -> oldest to newest, newest to oldest
 * scripting language -> javascript, ruby
 */


export default function (projects, primary, secondary) {
  switch (primary) {
    case "age":
      return ageFilter(projects, secondary)
    case "language":
      return scriptingLanguage(projects, secondary)
  }
}


/*
 * Second filter - age filter
 */
function ageFilter (project, secondary) {
  let field = "age"
  switch (secondary) {
    case "newest":
      return project.sort((h, g)  =>  h.details[field] - g.details[field])
    case "oldest":
      return project.sort((h, g) =>  g.details[field] - h.details[field])
  }
}

/*
 * Second filter - scripting lanugage filter
 */
function scriptingLanguage (project, secondary) {
  /*
   * Function to create tag matching
   */
  function filterTag(tag, field) {
    return function (projects) {
      return projects.filter(function (h) {
        let flag = false;
        for (let i = 0; i < h.details[field].length; i++) {

          if (h.details[field][i] == tag) {
            flag = true;
          }
        }
        return flag;
      })
    }
  }


  let field = "tags"
  let filterJavascriptTag = filterTag("Javascript", field)
  let filterRubyTag = filterTag("Ruby", field)

  /*
   * Switch
   */
  switch (secondary) {
    case "javascript":
      return filterJavascriptTag(project)

    case "ruby":
      return filterRubyTag(project)
  }
}
