// "use client";
// import Board from "@/components/completeBoardComponent";
// import type { CompleteBoard } from "@/public/board.constant";
// import { useMemo, useState } from "react";

// export default function BoardPage() {
// 	const [currentBoard, setCurrentBoard] = useState<CompleteBoard | null>(null);
// 	const [isEditing, setIsEditing] = useState(false);

// 	const handleBoardChange = (board: CompleteBoard) => {
// 		setCurrentBoard(board);
// 		console.log("Board received in parent:", board);
// 	};

// 	return (
// 		<div>
// 			<button
// 				className="bg-blue-500 text-white p-2 rounded-md"
// 				onClick={() => setIsEditing(!isEditing)}
// 			>
// 				{isEditing ? "Save" : "Edit Board"}
// 			</button>
// 			<Board onBoardChange={handleBoardChange} isEditing={isEditing} />
// 		</div>
// 	);
// }
