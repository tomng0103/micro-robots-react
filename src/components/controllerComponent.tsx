"use client";
import GridLogicUtils from "@/public/gridLogic.utils";
import { createContext, useContext, useState } from "react";
interface ControllerContext {
    currentPosition: { x: number, y: number };
    setCurrentPosition: (position: { x: number, y: number }) => void;
    moveHistory: { from: { x: number, y: number }, to: { x: number, y: number } }[];
    newMove: ({x, y}: {x: number, y: number}) => void;
    undoMove: () => void;
    resetMoveHistory: () => void;
    targetPosition: { x: number, y: number };
    newTargetPosition: () => void;
    gameStatus: 'playing' | 'gameover'| 'editing';
    setGameStatus: (status: 'playing' | 'gameover'| 'editing') => void;
    displayRobotAndFlag: boolean;
    toggleDisplayRobotAndFlag: () => void;
}
const ControllerContext = createContext<ControllerContext | null>(null);

export default function ControllerProvider({ children }: { children: React.ReactNode }) {
    const [moveHistory, setMoveHistory] = useState<{ from: { x: number, y: number }, to: { x: number, y: number } }[]>([]);
    const [currentPosition, setCurrentPosition] = useState<{ x: number, y: number }>({ x: 0, y: 0 });
    const [targetPosition, setTargetPosition] = useState<{ x: number, y: number }>({ x: 5, y: 5 });
    const [gameStatus, setGameStatus] = useState<'playing' | 'gameover'| 'editing'>('playing');
    const [displayRobotAndFlag, setDisplayRobotAndFlag] = useState(true);

    const toggleDisplayRobotAndFlag = () => {
        setDisplayRobotAndFlag(!displayRobotAndFlag);
    };

    const newMove = ({x, y}: {x: number, y: number}) => {
        const moveInfo = {
            from: { x: currentPosition.x, y: currentPosition.y },
            to: { x: x, y: y }
        };
        setMoveHistory([...moveHistory, moveInfo]);
    }

    const undoMove = () => {
        if(moveHistory.length === 0) return;
        const lastMove = moveHistory[moveHistory.length - 1];
        setCurrentPosition(lastMove.from);
        setMoveHistory(moveHistory.slice(0, -1));
    };
    
    const resetMoveHistory = () => {
        setMoveHistory([]);
    };
    const newTargetPosition = () => {
        setTargetPosition(GridLogicUtils.getNewTargetPosition({ x: currentPosition.x, y: currentPosition.y }));
    };
    const value = { 
        currentPosition, 
        setCurrentPosition, 
        moveHistory, 
        newMove,
        undoMove,
        resetMoveHistory, 
        targetPosition, 
        newTargetPosition, 
        gameStatus, 
        setGameStatus,
        displayRobotAndFlag,
        toggleDisplayRobotAndFlag,
    };
    return <ControllerContext.Provider value={value}>{children}</ControllerContext.Provider>;
}

export function useController(): ControllerContext {
    const context = useContext(ControllerContext);
    if (!context) {
        throw new Error("useController must be used within a ControllerProvider");
    }
    return context;
};