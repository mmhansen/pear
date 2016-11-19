import {
  buildSchema
} from 'graphql';

const projectArgs = `
  owner: String!,
  title: String!,
  description: String!,
  tags: [String]!,
  timezone: String,
  language: String,
  status: String,
  max_members: Int,
  repository: String
  `;

const ProjectSchema = `
  type Project {
    participants: Participants
    details: Details
  }
  type Participants {
    owner: User
    members: [User]
    applicants: [User]
  }
  type Details {
    title: String
    repository: String
    description: String
    tags: [String]
    options: Options
  }
  type Options {
    lanuage: String
    timezone: String
    max_members: Int
  }
  type Members {
    addParticipant(userId: String!): User
    removeParticipant(userId: String!): User
    addApplicant(userId: String!): User
    removeApplicant(userId: String!): User
  }
`

const MailSchema = ``
const UserSchema = `
  type User {
    _id: String
    email: String
    username: String
    communication: Communication
    Projects: Project
  }
  type Communication {
    timezone: String
    lanuage: String
  }
`
const mutation = `
  type Mutation {
    project(id: String!, ${projectArgs}): Project
    members(projectId: String!, owner: String!): Members
  }
`
const query = `
  type Query {
    oneProject(id: String!): Project
    activeProjects: [Project]
    me(id: String!): User
    tags: [String]
  }
`
export const schema = new buildSchema(`
  ${ProjectSchema}
  ${MailSchema}
  ${UserSchema}
  ${mutation}
  ${query}
`)
