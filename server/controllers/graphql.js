import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
  GraphQLNonNull
} from 'graphql';
// locals
import User from '../models/user'
import Project from '../models/project'
//
const UserType = new GraphQLObjectType({
  name: "Author",
  description: "This represent an author",
  fields: () => ({
    _id: {type: new GraphQLNonNull(GraphQLString)},
    githubId: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: function(post) {
          return post.githubId || "Does not exist";
        }
      }
  })
});

//
const query = new GraphQLObjectType({
  name: 'BlogSchema',
  description: "Root of the Blog Schema",
  fields: () => ({
    users: {
      type: new GraphQLList(UserType),
      resolve: () => User.find({})
    },
    userById: {
      type: UserType,
      args: {
        _id: {type: GraphQLString}
      },
      resolve: (source, _id) => User.findOne({_id})
    }
  })
});
//
const mutation = new GraphQLObjectType({
  name: 'AddUser',
  fields: () => ({
    user: {
      type: UserType,
      args: {
        email: {type: new GraphQLNonNull(GraphQLString)},
      },
      resolve: (source, args) => {
        const newUser = new User(args)
        return newUser.save()
      }
    }
  })
})
const Schema = new GraphQLSchema({ query, mutation });

export default Schema;
