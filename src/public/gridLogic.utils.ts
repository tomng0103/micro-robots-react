import { CompleteBoard, GridConfig } from "./board.constant";

export default class GridLogicUtils {

    public static initCoordinates(completeBoard: CompleteBoard): CompleteBoard{
        // Board[0] = LEFT_TOP (start at x: 0, y: 0)
        // Board[1] = RIGHT_TOP (start at x: 3, y: 0)
        // Board[2] = LEFT_BOTTOM (start at x: 0, y: 3)
        // Board[3] = RIGHT_BOTTOM (start at x: 3, y: 3)
        const newCompleteBoard: CompleteBoard = [...completeBoard];
        newCompleteBoard[0].forEach((row, rowIndex) => {
            row.forEach((grid, columnIndex) => {
                grid.x = columnIndex;
                grid.y = rowIndex;
                grid.hasRobot = false;
            });
        });

        newCompleteBoard[1].forEach((row, rowIndex) => {
            row.forEach((grid, columnIndex) => {
                grid.x = columnIndex + 3;
                grid.y = rowIndex;
                grid.hasRobot = false;
            });
        });

        newCompleteBoard[2].forEach((row, rowIndex) => {
            row.forEach((grid, columnIndex) => {
                grid.x = columnIndex;
                grid.y = rowIndex + 3;
                grid.hasRobot = false;
            });
        });

        newCompleteBoard[3].forEach((row, rowIndex) => {
            row.forEach((grid, columnIndex) => {
                grid.x = columnIndex + 3;
                grid.y = rowIndex + 3;
                grid.hasRobot = false;
            });
        });
        newCompleteBoard[0][0][0].hasRobot = true;
        return newCompleteBoard;
    }

    public static getGridInfo(completeBoard: CompleteBoard, x: number, y: number): GridConfig {
        const sectorIndex = GridLogicUtils.getSectorIndex(x, y);
        const rowIndex = GridLogicUtils.getRowIndex(sectorIndex, y);
        const gridInfo = completeBoard[sectorIndex][rowIndex].find((grid: GridConfig) => grid.x == x && grid.y == y);
        return gridInfo as GridConfig;
    }

    private static getSectorIndex(x: number, y: number): number {
        if(x < 3 && y < 3) return 0;
        if(x >= 3 && y < 3) return 1;
        if(x < 3 && y >= 3) return 2;
        if(x >= 3 && y >= 3) return 3;
        return -1;
    }

    private static getRowIndex(sectorIndex: number, y: number): number {
        if(sectorIndex == 0) return y;
        if(sectorIndex == 1) return y;
        if(sectorIndex == 2) return y - 3;
        if(sectorIndex == 3) return y - 3;
        return -1;
    }

    private static isCardinalDirection(currentGridInfo: GridConfig, targetGridInfo: GridConfig): boolean {
        if(currentGridInfo.x == targetGridInfo.x && currentGridInfo.y != targetGridInfo.y) return true;
        if(currentGridInfo.x != targetGridInfo.x && currentGridInfo.y == targetGridInfo.y) return true;
        return false;
    }

    public static canMoveTo(currentGridInfo: GridConfig, targetGridInfo: GridConfig): boolean {
        if(!GridLogicUtils.isCardinalDirection(currentGridInfo, targetGridInfo)) {
            return false;
        }

        if( currentGridInfo.color == targetGridInfo.color || 
            currentGridInfo.index == targetGridInfo.index) {
            return true;
        }
        return false;
    }

    public static isSamePosition(currentGridInfo: GridConfig, targetGridInfo: GridConfig): boolean {
        return currentGridInfo.x == targetGridInfo.x && currentGridInfo.y == targetGridInfo.y;
    }

    public static getNewTargetPosition({x, y}: {x: number, y: number}): {x: number, y: number} {
        do {
            const newPosition = {x: Math.floor(Math.random() * 6), y: Math.floor(Math.random() * 6)};
            if(newPosition.x != x && newPosition.y != y) {
                console.log("New position:", newPosition);
                return newPosition;
            }
        } while(true);
    }

    public static isGoalReached(currentPosition: {x: number, y: number}, targetPosition: {x: number, y: number}): boolean {
        console.log("Current position:", currentPosition);
        if(currentPosition.x == targetPosition.x && currentPosition.y == targetPosition.y) {
            console.log("Goal reached");
            return true;
        }
        return false;
    }
}