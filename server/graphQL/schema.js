import {
  buildSchema
} from 'graphql';

const ProjectSchema = `
  type Project {
    _id: String
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
    status: String
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
    username: String
    communication: Communication
    Projects: Project
  }
  type Communication {
    timezone: String
    language: String
  }
`

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

const mutation = `
  input participantInput {
    owner: String!
  }
  input projectDetailInput {
    title: String!
    description: String!
    tags: [String]!
    repository: String
    status: String
    options: projectOptionInput
  }
  input projectOptionInput {
    max_members: Int
    language: String
    timezone: String
  }
  input ProjectInput {
    participants: participantInput
    details: projectDetailInput
  }
  type Mutation {
    project(id: String!, project: ProjectInput ): Project
    members(projectId: String!, owner: String!): Members
  }
`
const query = `
  type Query {
    oneProject(id: String!): Project
    activeProjects: [Project]
    me(id: String!): User
    tags: [String]
    id: String
  }
`
export const schema = new buildSchema(`
  ${ProjectSchema}
  ${MailSchema}
  ${UserSchema}
  ${mutation}
  ${query}
`)
