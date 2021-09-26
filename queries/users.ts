export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      imageUri
      status
      group
      chatRoomManager {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
          chatRoom{
            id
            chatRoomUsers{
                items{
                    user{
                        id
                        name
                        imageUri
                        status
                    }
                }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;

export const listUsersExceptID = /* GraphQL */ `
  query ListUsers(
    $limit: Int
    $filterID: ID!
  ) {
    listUsers(filter: {id: {ne: $filterID}}, limit: $limit) {
      items {
        id
        name
        email
        imageUri
        status
        group
        createdAt
        updatedAt
      }
    }
  }
`;