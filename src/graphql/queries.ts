/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getChatRoomManager = /* GraphQL */ `
  query GetChatRoomManager($id: ID!) {
    getChatRoomManager(id: $id) {
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
        messages {
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
export const listChatRoomManagers = /* GraphQL */ `
  query ListChatRoomManagers(
    $filter: ModelChatRoomManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRoomManagers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUrl
          description
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
      messages {
        items {
          id
          createdAt
          content
          userID
          chatRoomID
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      createdAt
      content
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
        messages {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          name
          email
          imageUri
          status
          group
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUrl
          description
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
export const messagesByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByChatRoom(
      chatRoomID: $chatRoomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        content
        userID
        chatRoomID
        user {
          id
          name
          email
          imageUri
          status
          group
          createdAt
          updatedAt
        }
        chatRoom {
          id
          name
          imageUrl
          description
          createdAt
          updatedAt
        }
        updatedAt
      }
      nextToken
    }
  }
`;
