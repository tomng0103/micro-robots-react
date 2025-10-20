"use client";

import { GRID_SIZE, type SmallBoard } from "@/public/board.constant";
import { useEffect, useState } from "react";
import { Paper } from "@mui/material";

interface SmallBoardComponentProps {
	smallBoard: SmallBoard;
	onGridClick?: (x: number, y: number) => void;
}

export default function SmallBoardComponent({ smallBoard, onGridClick }: SmallBoardComponentProps) {
	const [board, setBoard] = useState<SmallBoard>(smallBoard);
	useEffect(() => {
		setBoard(smallBoard);
	}, [smallBoard]);

	// Utility to map board color codes to background colors
	const getBgColor = (color: string) => {
		switch (color) {
			case "R": return "#f87171"; // Red-400
			case "G": return "#4ade80"; // Green-400
			case "B": return "#60a5fa"; // Blue-400
			case "Y": return "#fde68a"; // Yellow-200
			case "W": return "#f3f4f6"; // Gray-100 for White
			case "P": return "#f472b6"; // Pink-400
			default: return "#fff";
		}
	};

	// We'll use a plain function instead of styled() so we can pass color dynamically
	function Item({ children, gridColor, index, onClick, isClickable }: { children: React.ReactNode, gridColor: string, index: number, onClick?: () => void, isClickable?: boolean }) {
		return (
			<Paper
				onClick={onClick}
				style={{
					backgroundImage: `url(/grid-background/${gridColor}${index}.png)`,
					backgroundPosition: 'center center',
					backgroundSize: 'contain',
					backgroundRepeat: 'no-repeat',
					width: `${GRID_SIZE}px`,
					height: `${GRID_SIZE}px`,
					textAlign: 'center',
					color: "#334155", // slate-700, pick a nice readable dark color for text
					border: "1px solid #334155",
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					fontSize: '30px',
					cursor: isClickable ? 'pointer' : 'default',
					transition: 'transform 0.1s',
				}}
				elevation={1}
				onMouseEnter={(e) => {
					if (isClickable) {
						e.currentTarget.style.transform = 'scale(1.05)';
					}
				}}
				onMouseLeave={(e) => {
					if (isClickable) {
						e.currentTarget.style.transform = 'scale(1)';
					}
				}}
			>
				{children}
			</Paper>
		);
	}

	return (
		<div style={{ display: 'inline-block' }}>
			{board.map((row, rowIndex) => (
				<div key={rowIndex} style={{ display: 'flex', flexDirection: 'row' }}>
					{row.map((grid, gridIndex) => (
						<Item
							key={gridIndex}
							gridColor={grid.color}
							index={grid.index}
							onClick={() => onGridClick && onGridClick(grid.x, grid.y)}
							isClickable={!!onGridClick}
						>
							<></>
						</Item>
					))}
				</div>
			))}
		</div>
	);
}