export const lastMsgByChatRoom = /* GraphQL */ `
  query MessagesByChatRoom(
    $chatRoomID: ID!
  ) {
      messagesByChatRoom(
        chatRoomID: $chatRoomID
        sortDirection: DESC
        limit: 1
      ) {
        items {
          content,
          createdAt,
          userID,
        }
      }
    }
`;