/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  imageUri?: string | null,
  status?: string | null,
  group?: string | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  group?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  name: string,
  email: string,
  imageUri?: string | null,
  status?: string | null,
  group?: string | null,
  chatRoomManager?: ModelChatRoomManagerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelChatRoomManagerConnection = {
  __typename: "ModelChatRoomManagerConnection",
  items?:  Array<ChatRoomManager | null > | null,
  nextToken?: string | null,
};

export type ChatRoomManager = {
  __typename: "ChatRoomManager",
  id: string,
  userID: string,
  chatRoomID: string,
  user?: User | null,
  chatRoom?: ChatRoom | null,
  createdAt: string,
  updatedAt: string,
};

export type ChatRoom = {
  __typename: "ChatRoom",
  id: string,
  name?: string | null,
  imageUrl?: string | null,
  description?: string | null,
  chatRoomUsers?: ModelChatRoomManagerConnection | null,
  adminUsers?: ModelChatRoomManagerConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  imageUri?: string | null,
  status?: string | null,
  group?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateChatRoomManagerInput = {
  id?: string | null,
  userID: string,
  chatRoomID: string,
};

export type ModelChatRoomManagerConditionInput = {
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomManagerConditionInput | null > | null,
  or?: Array< ModelChatRoomManagerConditionInput | null > | null,
  not?: ModelChatRoomManagerConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateChatRoomManagerInput = {
  id: string,
  userID?: string | null,
  chatRoomID?: string | null,
};

export type DeleteChatRoomManagerInput = {
  id: string,
};

export type CreateChatRoomInput = {
  id?: string | null,
  name?: string | null,
  imageUrl?: string | null,
  description?: string | null,
};

export type ModelChatRoomConditionInput = {
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelChatRoomConditionInput | null > | null,
  or?: Array< ModelChatRoomConditionInput | null > | null,
  not?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomInput = {
  id: string,
  name?: string | null,
  imageUrl?: string | null,
  description?: string | null,
};

export type DeleteChatRoomInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  imageUri?: ModelStringInput | null,
  status?: ModelStringInput | null,
  group?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items?:  Array<User | null > | null,
  nextToken?: string | null,
};

export type ModelChatRoomManagerFilterInput = {
  id?: ModelIDInput | null,
  userID?: ModelIDInput | null,
  chatRoomID?: ModelIDInput | null,
  and?: Array< ModelChatRoomManagerFilterInput | null > | null,
  or?: Array< ModelChatRoomManagerFilterInput | null > | null,
  not?: ModelChatRoomManagerFilterInput | null,
};

export type ModelChatRoomFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelChatRoomFilterInput | null > | null,
  or?: Array< ModelChatRoomFilterInput | null > | null,
  not?: ModelChatRoomFilterInput | null,
};

export type ModelChatRoomConnection = {
  __typename: "ModelChatRoomConnection",
  items?:  Array<ChatRoom | null > | null,
  nextToken?: string | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    imageUri?: string | null,
    status?: string | null,
    group?: string | null,
    chatRoomManager?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    imageUri?: string | null,
    status?: string | null,
    group?: string | null,
    chatRoomManager?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    imageUri?: string | null,
    status?: string | null,
    group?: string | null,
    chatRoomManager?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomManagerMutationVariables = {
  input: CreateChatRoomManagerInput,
  condition?: ModelChatRoomManagerConditionInput | null,
};

export type CreateChatRoomManagerMutation = {
  createChatRoomManager?:  {
    __typename: "ChatRoomManager",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      imageUri?: string | null,
      status?: string | null,
      group?: string | null,
      chatRoomManager?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      imageUrl?: string | null,
      description?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      adminUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomManagerMutationVariables = {
  input: UpdateChatRoomManagerInput,
  condition?: ModelChatRoomManagerConditionInput | null,
};

export type UpdateChatRoomManagerMutation = {
  updateChatRoomManager?:  {
    __typename: "ChatRoomManager",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      imageUri?: string | null,
      status?: string | null,
      group?: string | null,
      chatRoomManager?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      imageUrl?: string | null,
      description?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      adminUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomManagerMutationVariables = {
  input: DeleteChatRoomManagerInput,
  condition?: ModelChatRoomManagerConditionInput | null,
};

export type DeleteChatRoomManagerMutation = {
  deleteChatRoomManager?:  {
    __typename: "ChatRoomManager",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      imageUri?: string | null,
      status?: string | null,
      group?: string | null,
      chatRoomManager?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      imageUrl?: string | null,
      description?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      adminUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateChatRoomMutationVariables = {
  input: CreateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type CreateChatRoomMutation = {
  createChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    imageUrl?: string | null,
    description?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    adminUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateChatRoomMutationVariables = {
  input: UpdateChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type UpdateChatRoomMutation = {
  updateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    imageUrl?: string | null,
    description?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    adminUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteChatRoomMutationVariables = {
  input: DeleteChatRoomInput,
  condition?: ModelChatRoomConditionInput | null,
};

export type DeleteChatRoomMutation = {
  deleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    imageUrl?: string | null,
    description?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    adminUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    imageUri?: string | null,
    status?: string | null,
    group?: string | null,
    chatRoomManager?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items?:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      imageUri?: string | null,
      status?: string | null,
      group?: string | null,
      chatRoomManager?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomManagerQueryVariables = {
  id: string,
};

export type GetChatRoomManagerQuery = {
  getChatRoomManager?:  {
    __typename: "ChatRoomManager",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      imageUri?: string | null,
      status?: string | null,
      group?: string | null,
      chatRoomManager?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      imageUrl?: string | null,
      description?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      adminUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomManagersQueryVariables = {
  filter?: ModelChatRoomManagerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomManagersQuery = {
  listChatRoomManagers?:  {
    __typename: "ModelChatRoomManagerConnection",
    items?:  Array< {
      __typename: "ChatRoomManager",
      id: string,
      userID: string,
      chatRoomID: string,
      user?:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
        imageUri?: string | null,
        status?: string | null,
        group?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      chatRoom?:  {
        __typename: "ChatRoom",
        id: string,
        name?: string | null,
        imageUrl?: string | null,
        description?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetChatRoomQueryVariables = {
  id: string,
};

export type GetChatRoomQuery = {
  getChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    imageUrl?: string | null,
    description?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    adminUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListChatRoomsQueryVariables = {
  filter?: ModelChatRoomFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListChatRoomsQuery = {
  listChatRooms?:  {
    __typename: "ModelChatRoomConnection",
    items?:  Array< {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      imageUrl?: string | null,
      description?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      adminUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    imageUri?: string | null,
    status?: string | null,
    group?: string | null,
    chatRoomManager?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    imageUri?: string | null,
    status?: string | null,
    group?: string | null,
    chatRoomManager?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    imageUri?: string | null,
    status?: string | null,
    group?: string | null,
    chatRoomManager?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomManagerSubscription = {
  onCreateChatRoomManager?:  {
    __typename: "ChatRoomManager",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      imageUri?: string | null,
      status?: string | null,
      group?: string | null,
      chatRoomManager?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      imageUrl?: string | null,
      description?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      adminUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomManagerSubscription = {
  onUpdateChatRoomManager?:  {
    __typename: "ChatRoomManager",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      imageUri?: string | null,
      status?: string | null,
      group?: string | null,
      chatRoomManager?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      imageUrl?: string | null,
      description?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      adminUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomManagerSubscription = {
  onDeleteChatRoomManager?:  {
    __typename: "ChatRoomManager",
    id: string,
    userID: string,
    chatRoomID: string,
    user?:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      imageUri?: string | null,
      status?: string | null,
      group?: string | null,
      chatRoomManager?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    chatRoom?:  {
      __typename: "ChatRoom",
      id: string,
      name?: string | null,
      imageUrl?: string | null,
      description?: string | null,
      chatRoomUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      adminUsers?:  {
        __typename: "ModelChatRoomManagerConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateChatRoomSubscription = {
  onCreateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    imageUrl?: string | null,
    description?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    adminUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateChatRoomSubscription = {
  onUpdateChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    imageUrl?: string | null,
    description?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    adminUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteChatRoomSubscription = {
  onDeleteChatRoom?:  {
    __typename: "ChatRoom",
    id: string,
    name?: string | null,
    imageUrl?: string | null,
    description?: string | null,
    chatRoomUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    adminUsers?:  {
      __typename: "ModelChatRoomManagerConnection",
      items?:  Array< {
        __typename: "ChatRoomManager",
        id: string,
        userID: string,
        chatRoomID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
