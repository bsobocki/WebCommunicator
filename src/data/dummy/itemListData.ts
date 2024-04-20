// export interface ChatItemData {
//     title: string,
//     lastMessage: string
// }

import { ChatData } from "../../interface/data";

// export const chats: ChatItemData[] = [
//     {title: "freindly cunts", lastMessage: "Ty siusiaku"},
//     {title: "Damian Matkowski", lastMessage: "Noo :D"},
//     {title: "Friends Trio", lastMessage: "XD"},
//     {title: "Sebastian Kalla", lastMessage: "Niedługo przyjadę do was tam"},
//     {title: "Kapitan Bomba", lastMessage: "Tępe chuje"},
//     {title: "Andrzej Tate", lastMessage: "Jakiego koloru jest twoje bugatti?"},
//     {title: "Elon Musk", lastMessage: "AI nas zabije, no chyba, że moja, to nie."},
//     {title: "USA presidents", lastMessage: "Musimy się zastanowić... Skąd jeszcze byśmy mogli zajebać ropę?"},
//     {title: "USA presidents", lastMessage: "Skąd jeszcze byśmy mogli zajebać ropę?"},
//     {title: "USA presidents", lastMessage: "Skąd jeszcze byśmy mogli zajebać ropę?"},
//     {title: "USA presidents", lastMessage: "Skąd jeszcze byśmy mogli zajebać ropę?"},
//     {title: "Andrzej Tate", lastMessage: "Jakiego koloru jest twoje bugatti?"},
//     {title: "Andrzej Tate", lastMessage: "Jakiego koloru jest twoje bugatti?"},
//     {title: "Andrzej Tate", lastMessage: "Jakiego koloru jest twoje bugatti?"},
//     {title: "Andrzej Tate", lastMessage: "Jakiego koloru jest twoje bugatti?"},
// ]

export const chats: ChatData[] = [
    {
      id: "chat-1",
      title: "Friendly Chat",
      participants: ["user1", "user2"],
      messages: [
        {
          id: "message-1",
          sender: "user2",
          time: new Date('2023-04-01T14:39:00'),
          content: "Ty siusiaku"
        }
      ]
    },
    {
      id: "chat-2",
      title: "Damian Matkowski",
      participants: ["user3", "user4"],
      messages: [
        {
          id: "message-2",
          sender: "user4",
          time: new Date('2023-04-02T16:25:00'),
          content: "Noo :D"
        }
      ]
    },
    {
      id: "chat-3",
      title: "Friends Trio",
      participants: ["user5", "user6", "user7"],
      messages: [
        {
          id: "message-3",
          sender: "user7",
          time: new Date('2023-04-03T17:45:00'),
          content: "XD"
        }
      ]
    },
    {
      id: "chat-4",
      title: "Sebastian Kalla",
      participants: ["user8", "user9"],
      messages: [
        {
          id: "message-4",
          sender: "user9",
          time: new Date('2023-04-04T12:30:00'),
          content: "Niedługo przyjadę do was tam"
        }
      ]
    },
    {
      id: "chat-5",
      title: "Kapitan Bomba",
      participants: ["user10", "user11"],
      messages: [
        {
          id: "message-5",
          sender: "user11",
          time: new Date('2023-04-05T18:20:00'),
          content: "Tępe chuje"
        }
      ]
    },
    {
      id: "chat-6",
      title: "Andrzej Tate",
      participants: ["user12", "user13"],
      messages: [
        {
          id: "message-6",
          sender: "user13",
          time: new Date('2023-04-06T14:00:00'),
          content: "Jakiego koloru jest twoje bugatti?"
        }
      ]
    },
    {
      id: "chat-7",
      title: "Elon Musk",
      participants: ["user14", "user15"],
      messages: [
        {
          id: "message-7",
          sender: "user15",
          time: new Date('2023-04-07T17:20:00'),
          content: "AI nas zabije, no chyba, że moja, to nie."
        }
      ]
    },
    {
      id: "chat-8",
      title: "USA presidents",
      participants: ["user16", "user17", "user18"],
      messages: [
        {
          id: "message-8",
          sender: "user17",
          time: new Date('2023-04-08T19:00:00'),
          content: "Musimy się zastanowić... Skąd jeszcze byśmy mogli zajebać ropę?"
        }
      ]
    },
    {
        id: "chat-9",
        title: "Tech Enthusiasts",
        participants: ["user19", "user20"],
        messages: [
          {
            id: "message-9",
            sender: "user19",
            time: new Date('2023-04-09T15:00:00'),
            content: "Have you checked out the latest tech release?"
          }
        ]
      },
      {
        id: "chat-10",
        title: "Book Club",
        participants: ["user21", "user22", "user23"],
        messages: [
          {
            id: "message-10",
            sender: "user22",
            time: new Date('2023-04-10T17:30:00'),
            content: "This month's book selection is really interesting!"
          }
        ]
      },
      {
        id: "chat-11",
        title: "Music Fans",
        participants: ["user24", "user25"],
        messages: [
          {
            id: "message-11",
            sender: "user25",
            time: new Date('2023-04-11T19:45:00'),
            content: "The new album drops this weekend, can't wait!"
          }
        ]
      },
      {
        id: "chat-12",
        title: "Foodie Group",
        participants: ["user26", "user27", "user28"],
        messages: [
          {
            id: "message-12",
            sender: "user27",
            time: new Date('2023-04-12T13:15:00'),
            content: "Check out this delicious recipe I just tried!"
          }
        ]
      }
  ];
  