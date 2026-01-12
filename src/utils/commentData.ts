import type { CommentData } from "../types";

export const commentsData: CommentData[] = [
  {
    name: "Eric Cartman",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
    replies: [
      {
        name: "Stan Marsh",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
        replies: [
          {
            name: "Kyle Broflovski",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Michael Scott",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
    replies: [
      {
        name: "Dwight Schrute",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
        replies: [
          {
            name: "Jim Halpert",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
            replies: [
              {
                name: "Kevin Malone",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
                replies: [
                  {
                    name: "Pam Beesly",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
                    replies: [
                      {
                        name: "Angela Martin",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
                        replies: [
                          {
                            name: "Stanley Hudson",
                            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
                            replies: [
                              {
                                name: "Ryan Howard",
                                text: "Lorem ipsum dolor.",
                                replies: [],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Tony Soprano",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
    replies: [
      {
        name: "Christopher Moltisanti",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
        replies: [
          {
            name: "Junior Soprano",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
            replies: [
              {
                name: "Paulie Gualtieri",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quo.",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
