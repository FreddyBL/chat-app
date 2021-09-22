/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoomManager = /* GraphQL */ `
  mutation CreateChatRoomManager(
    $input: CreateChatRoomManagerInput!
    $condition: ModelChatRoomManagerConditionInput
  ) {
    createChatRoomManager(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        email
        imageUri
        status
        group
        chatRoomManager {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUrl
        description
        chatRoomUsers {
          nextToken
        }
        adminUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoomManager = /* GraphQL */ `
  mutation UpdateChatRoomManager(
    $input: UpdateChatRoomManagerInput!
    $condition: ModelChatRoomManagerConditionInput
  ) {
    updateChatRoomManager(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        email
        imageUri
        status
        group
        chatRoomManager {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUrl
        description
        chatRoomUsers {
          nextToken
        }
        adminUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoomManager = /* GraphQL */ `
  mutation DeleteChatRoomManager(
    $input: DeleteChatRoomManagerInput!
    $condition: ModelChatRoomManagerConditionInput
  ) {
    deleteChatRoomManager(input: $input, condition: $condition) {
      id
      userID
      chatRoomID
      user {
        id
        name
        email
        imageUri
        status
        group
        chatRoomManager {
          nextToken
        }
        createdAt
        updatedAt
      }
      chatRoom {
        id
        name
        imageUrl
        description
        chatRoomUsers {
          nextToken
        }
        adminUsers {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      name
      imageUrl
      description
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      adminUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      name
      imageUrl
      description
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      adminUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      name
      imageUrl
      description
      chatRoomUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      adminUsers {
        items {
          id
          userID
          chatRoomID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
