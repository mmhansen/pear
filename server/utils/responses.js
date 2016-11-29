export default function (req, res, next) {
    /*
     * 200 -> good request
     */
    res.okay = (data = { "response": "good req" }) => {
      res
        .status(200)
        .json(data)
    }
    /*
     * 201 -> created resource
     */
    res.created = (data = { "response": "resource created" }) => {
      res
        .status(201)
        .json(data)
    }
    /*
     * 409 -> conflict
     */
    res.conflict = (data = { "response": "resource already exists"}) => {
      res
        .status(409)
        .json(data)
     }
     /*
      * 400 -> bad request
      */
    res.badRequest = (data = { "response": "fields are missing!"}) => {
      res
        .status(400)
        .json(data)
    }
     //
     next();
}
