"use client";
import SmallBoardComponent from "@/components/smallBoardComponent";
import RobotComponent from "@/components/robotComponent";
import type { CompleteBoard } from "@/public/board.constant";
import { BOARD_CONFIG_BOARD_A, BOARD_CONFIG_BOARD_B, BOARD_CONFIG_BOARD_C, BOARD_CONFIG_BOARD_D } from "@/public/board.constant";
import { useEffect, useState } from "react";
import GridLogicUtils from "@/public/gridLogic.utils";
import { useController } from "@/components/controllerComponent";
import PoleFlagComponent from "./poleFlagComponent";

export default function CompleteBoardComponent() {
    const { targetPosition, currentPosition, setCurrentPosition, gameStatus, newMove } = useController();
    const [completeBoard, setCompleteBoard] = useState<CompleteBoard>(() =>
        GridLogicUtils.initCoordinates([BOARD_CONFIG_BOARD_A, BOARD_CONFIG_BOARD_B, BOARD_CONFIG_BOARD_C, BOARD_CONFIG_BOARD_D])
    );

    const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

    const handleGridClick = (x: number, y: number) => {
        if (gameStatus === 'playing') {
            // Only allow movement to adjacent cells (up, down, left, right)
            // const dx = Math.abs(x - robotPosition.x);
            // const dy = Math.abs(y - robotPosition.y);
            const currentGridInfo = GridLogicUtils.getGridInfo(completeBoard, currentPosition.x, currentPosition.y);
            const targetGridInfo = GridLogicUtils.getGridInfo(completeBoard, x, y);

            if(GridLogicUtils.isSamePosition(currentGridInfo, targetGridInfo)) {
                return;
            }

            if(GridLogicUtils.canMoveTo(currentGridInfo, targetGridInfo)) {
                currentGridInfo.hasRobot = false;
                targetGridInfo.hasRobot = true;
                setCurrentPosition({ x, y });
                newMove({x, y});
                // Note: setCurrentPosition is asynchronous; currentPosition won't update immediately here.
                // So this check is using the previous value, not the value we just set.
                // To ensure the check happens after the state updates, you should watch currentPosition with useEffect outside this handler if needed.
                // GridLogicUtils.isGoalReached(currentPosition, targetPosition); // this runs with old value
            } else {
                // TODO: Do some animation to show the user that they can not move to this position
                console.log("Can not move to this position");
                return;
            }
        }
    };

    const handleDragStart = (index: number) => {
        setDraggedIndex(index);
    };

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault(); // Allow drop
    };

    const handleDrop = (targetIndex: number) => {
        if (draggedIndex === null || draggedIndex === targetIndex) return;

        const newBoard = [...completeBoard];
        // Swap the boards
        [newBoard[draggedIndex], newBoard[targetIndex]] = [newBoard[targetIndex], newBoard[draggedIndex]];
        // Reinitialize coordinates after swap
        const updatedBoard = GridLogicUtils.initCoordinates(newBoard);
        setCurrentPosition({ x: 0, y: 0 });
        setCompleteBoard([...updatedBoard]);
        setDraggedIndex(null);
    };

    return (
        <div>
            {/* <div className="flex justify-center gap-4 mb-4">
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => setGameStatus('editing')}>
                    {gameStatus === 'editing' ? "Save Board" : "Edit Board"}
                </button>
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => handleNewTargetPosition()}>
                    New Target position
                </button>
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => resetRobotPosition()}>
                    Reset Robot Position
                </button>
            </div> */}
            <div style={{ display: 'inline-block', position: 'relative' }}>
                {gameStatus === 'editing' ? (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
                            <div
                                draggable
                                onDragStart={() => handleDragStart(0)}
                                onDragOver={handleDragOver}
                                onDrop={() => handleDrop(0)}
                                style={{ cursor: 'grab' }}
                            >
                                <SmallBoardComponent smallBoard={completeBoard[0]} />
                            </div>
                            <div
                                draggable
                                onDragStart={() => handleDragStart(1)}
                                onDragOver={handleDragOver}
                                onDrop={() => handleDrop(1)}
                                style={{ cursor: 'grab' }}
                            >
                                <SmallBoardComponent smallBoard={completeBoard[1]} />
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', marginTop: '16px' }}>
                            <div
                                draggable
                                onDragStart={() => handleDragStart(2)}
                                onDragOver={handleDragOver}
                                onDrop={() => handleDrop(2)}
                                style={{ cursor: 'grab' }}
                            >
                                <SmallBoardComponent smallBoard={completeBoard[2]} />
                            </div>
                            <div
                                draggable
                                onDragStart={() => handleDragStart(3)}
                                onDragOver={handleDragOver}
                                onDrop={() => handleDrop(3)}
                                style={{ cursor: 'grab' }}
                            >
                                <SmallBoardComponent smallBoard={completeBoard[3]} />
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <SmallBoardComponent smallBoard={completeBoard[0]} onGridClick={handleGridClick} />
                            <SmallBoardComponent smallBoard={completeBoard[1]} onGridClick={handleGridClick} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <SmallBoardComponent smallBoard={completeBoard[2]} onGridClick={handleGridClick} />
                            <SmallBoardComponent smallBoard={completeBoard[3]} onGridClick={handleGridClick} />
                        </div>
                        
                        {/* Robot Overlay */}
                        <RobotComponent x={currentPosition.x} y={currentPosition.y} />
                        <PoleFlagComponent x={targetPosition.x} y={targetPosition.y} />
                    </>
                )}
            </div>
        </div>
    );
}