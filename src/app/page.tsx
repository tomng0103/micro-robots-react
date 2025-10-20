"use client";
import Board from "@/components/completeBoardComponent";
import GridLogicUtils from "@/public/gridLogic.utils";
import { useEffect } from "react";
import ControllerProvider from "@/components/controllerComponent";
import { useController } from "@/components/controllerComponent";
import confetti from "canvas-confetti";

export default function BoardPage() {
    const { currentPosition, targetPosition, gameStatus, setGameStatus, setCurrentPosition, newTargetPosition, resetMoveHistory, moveHistory, undoMove, displayRobotAndFlag, toggleDisplayRobotAndFlag } = useController();
    
    useEffect(() => {
        if(GridLogicUtils.isGoalReached(currentPosition, targetPosition)) {
            console.log("Game over");
            setGameStatus('gameover');
        }
    }, [currentPosition, targetPosition, setGameStatus]);

    useEffect(() => {
        if(gameStatus === 'gameover') {
            // Trigger confetti effect
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });
            // Additional confetti burst for extra celebration
            setTimeout(() => {
                confetti({
                    particleCount: 50,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 }
                });
            }, 250);
            setTimeout(() => {
                confetti({
                    particleCount: 50,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 }
                });
            }, 400);
        }
    }, [gameStatus]);

    // Robot state - starts at position (0, 0)
    const resetRobotPosition = () => {
        const startingPosition = moveHistory.length > 0 ? moveHistory[0].from : { x: 0, y: 0 };
        setCurrentPosition(startingPosition);
        resetMoveHistory();
        setGameStatus('playing');
    };

    const handleNewTargetPosition = () => {
        newTargetPosition();
        resetMoveHistory();
        setGameStatus('playing');
    };

    const handleSaveBoard = () => {
        if(gameStatus === 'editing') {
            setCurrentPosition({ x: 0, y: 0 });
            resetMoveHistory();
            setGameStatus('playing');
        } else {
            setGameStatus('editing');
        }
    };
    
    return (
        <>
        <div className="min-h-screen p-8 flex flex-col justify-center items-center gap-4">
            <div className="flex justify-center gap-4 mb-4">
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => handleSaveBoard()}>
                    {gameStatus === 'editing' ? "Save Board" : "Edit Board"}
                </button>
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => toggleDisplayRobotAndFlag()}>
                    {displayRobotAndFlag ? '🙈 Hide' : '🐵 Show'}
                </button>
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => handleNewTargetPosition()}>
                    🏁 New
                </button>
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => undoMove()}>
                    🔙 Undo
                </button>
                <button className="bg-blue-500 text-white p-2 rounded-md" onClick={() => resetRobotPosition()}>
                    🤖 Reset
                </button>
            </div>
            <div className="flex justify-center gap-4 mb-4">
                <Board/>
            </div>
            <div className="flex justify-center gap-4 mb-4">
                <span className="text-sm text-gray-500">Move History:</span>
                {moveHistory.map((move, index) => (
                    <span key={index} className="text-sm text-gray-500">
                        {move.from.x}, {move.from.y} &rarr; {move.to.x}, {move.to.y}
                    </span>
                ))}    
            </div>
        </div>
        </>
    );
}
