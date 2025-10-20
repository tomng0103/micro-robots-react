export interface GridConfig {
    color: Color;
    index: Index;
    x: number;
    y: number;
    hasRobot?: boolean;
}

export const GRID_SIZE = 150;

export enum Color {
    RED = "R",
    GREEN = "G",
    BLUE = "B",
    YELLOW = "Y",
    WHITE = "W",
    PINK = "P",
}

export enum Index {
    ONE = 1,
    TWO = 2,
    THREE = 3,
    FOUR = 4,
    FIVE = 5,
    SIX = 6,
}

export type SmallBoard = GridConfig[][];

export type CompleteBoard = SmallBoard[];

export const BOARD_CONFIG_BOARD_A: SmallBoard = [
    [
        { color: Color.RED, index: Index.FIVE, x: 0, y: 0, hasRobot: true },
        { color: Color.GREEN, index: Index.SIX, x: 1, y: 0 },
        { color: Color.RED, index: Index.ONE, x: 2, y: 0 }
    ],
    [
        { color: Color.GREEN, index: Index.TWO, x: 0, y: 1 },
        { color: Color.WHITE, index: Index.TWO, x: 1, y: 1 },
        { color: Color.YELLOW, index: Index.ONE, x: 2, y: 1 }
    ],
    [
        { color: Color.WHITE, index: Index.THREE, x: 0, y: 2 },
        { color: Color.GREEN, index: Index.ONE, x: 1, y: 2 },
        { color: Color.YELLOW, index: Index.THREE, x: 2, y: 2 }
    ]
]

export const BOARD_CONFIG_BOARD_B: SmallBoard = [
    [
        { color: Color.PINK, index: Index.ONE, x: 0, y: 0 },
        { color: Color.WHITE, index: Index.FOUR, x: 1, y: 0 },
        { color: Color.PINK, index: Index.TWO, x: 2, y: 0 }
    ],
    [
        { color: Color.GREEN, index: Index.FIVE, x: 0, y: 1 },
        { color: Color.WHITE, index: Index.FIVE, x: 1, y: 1 },
        { color: Color.GREEN, index: Index.THREE, x: 2, y: 1 }
    ],
    [
        { color: Color.GREEN, index: Index.FOUR, x: 0, y: 2 },
        { color: Color.WHITE, index: Index.ONE, x: 1, y: 2 },
        { color: Color.PINK, index: Index.FOUR, x: 2, y: 2 }
    ]
]

//     [
//         [{ code: "P3" }, { code: "R6" }, { code: "R2" }],
//         [{ code: "B6" }, { code: "Y2" }, { code: "R3" }],
//         [{ code: "B5" }, { code: "Y5" }, { code: "R4" }],
//     ],
export const BOARD_CONFIG_BOARD_C: SmallBoard = [
    [
        { color: Color.PINK, index: Index.THREE, x: 0, y: 0 },
        { color: Color.RED, index: Index.SIX, x: 1, y: 0 },
        { color: Color.RED, index: Index.TWO, x: 2, y: 0 }
    ],
    [
        { color: Color.BLUE, index: Index.SIX, x: 0, y: 1 },
        { color: Color.YELLOW, index: Index.TWO, x: 1, y: 1 },
        { color: Color.RED, index: Index.THREE, x: 2, y: 1 }
    ],
    [
        { color: Color.BLUE, index: Index.FIVE, x: 0, y: 2 },
        { color: Color.YELLOW, index: Index.SIX, x: 1, y: 2 },
        { color: Color.RED, index: Index.FOUR, x: 2, y: 2 }
    ]
]
export const BOARD_CONFIG_BOARD_D: SmallBoard = [
    [
        { color: Color.BLUE, index: Index.TWO, x: 0, y: 0 },
        { color: Color.YELLOW, index: Index.SIX, x: 1, y: 0 },
        { color: Color.PINK, index: Index.FIVE, x: 2, y: 0 }
    ],
    [
        { color: Color.BLUE, index: Index.FOUR, x: 0, y: 1 },
        { color: Color.WHITE, index: Index.SIX, x: 1, y: 1 },
        { color: Color.PINK, index: Index.SIX, x: 2, y: 1 }
    ],
    [
        { color: Color.BLUE, index: Index.THREE, x: 0, y: 2 },
        { color: Color.YELLOW, index: Index.FOUR, x: 1, y: 2 },
        { color: Color.BLUE, index: Index.ONE, x: 2, y: 2 }
    ]
]
//     [
//         [{ code: "R5" }, { code: "G6" }, { code: "R1", hasRobot: true }],
//         [{ code: "G2" }, { code: "W2" }, { code: "Y1" }],
//         [{ code: "W3" }, { code: "G1" }, { code: "Y3" }],
//     ],
//     [
//         [{ code: "P1" }, { code: "W4" }, { code: "P2" }],
//         [{ code: "G5" }, { code: "W5" }, { code: "G3" }],
//         [{ code: "G4" }, { code: "W1" }, { code: "P4" }],
//     ],
//     [
//         [{ code: "P3" }, { code: "R6" }, { code: "R2" }],
//         [{ code: "B6" }, { code: "Y2" }, { code: "R3" }],
//         [{ code: "B5" }, { code: "Y5" }, { code: "R4" }],
//     ],
//     [
//         [{ code: "B2" }, { code: "Y6" }, { code: "P5" }],
//         [{ code: "B4" }, { code: "W6" }, { code: "P6" }],
//         [{ code: "B3" }, { code: "Y4" }, { code: "B1" }],
//     ],
// ]