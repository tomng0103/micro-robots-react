import { GRID_SIZE } from "@/public/board.constant";
import { useController } from "./controllerComponent";
interface PoleFlagComponentProps {
    x: number;
    y: number;
    gridSize?: number;
}
export default function PoleFlagComponent({ x, y, gridSize = GRID_SIZE }: PoleFlagComponentProps) {
    const { displayRobotAndFlag } = useController();
    return (
        <div
            style={{
                position: 'absolute',
                left: `${x * gridSize}px`,
                top: `${y * gridSize}px`,
                width: `${gridSize}px`,
                height: `${gridSize}px`,
                display: displayRobotAndFlag ? 'flex' : 'none',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none', // Allow clicks to pass through to grid
                transition: 'all 0.3s ease-in-out', // Smooth movement animation
                transform: 'translate(20px, -50px)',
            }}
        >
            <div
                style={{
                    fontSize: '60px',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                }}
            >
                {/* flag emoji */}
                🏁
            </div>
        </div>
    );
}