"use client";
import Header from "@/TicTacToe/Header";
import Footer from "@/TicTacToe/Footer";
import { useState } from "react";
import { Box, Button, Typography, Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [xHistory, setXHistory] = useState<number[]>([]);
  const [oHistory, setOHistory] = useState<number[]>([]);
  const [open, setOpen] = useState(false);

  const winner = calculateWinner(squares);
  const status = winner
    ? `勝者: ${winner}`
    : `次の手番: ${xIsNext ? "X" : "O"}`;

  function handleClick(i: number) {
    if (squares[i] || winner) return;

    const nextSquares = squares.slice();
    const newXHistory = [...xHistory];
    const newOHistory = [...oHistory];

    if (xIsNext) {
      if (xHistory.length === 3) {
        const removeIdx = newXHistory.shift()!;
        nextSquares[removeIdx] = "";
      }
      nextSquares[i] = "X";
      newXHistory.push(i);
    } else {
      if (oHistory.length === 3) {
        const removeIdx = newOHistory.shift()!;
        nextSquares[removeIdx] = "";
      }
      nextSquares[i] = "O";
      newOHistory.push(i);
    }

    setSquares(nextSquares);
    setXHistory(newXHistory);
    setOHistory(newOHistory);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    setXHistory([]);
    setOHistory([]);
  }

  return (
    <Box sx={{ bgcolor: "#fff", minHeight: "100vh", color: "#000" }}>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          variant="outlined"
          sx={{ mb: 2, color: "#000", borderColor: "#000" }}
          onClick={() => setOpen(true)}
        >
          ルールを見る
        </Button>
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
          <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            三目並べのルール
            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers>
            <Typography sx={{ mb: 2 }}>
              <strong>目的：</strong>
              3x3のマス盤面に、自分のマーク（&quot;X&quot;または&quot;O&quot;）を縦・横・斜めのいずれか一直線に3つ並べることを目指します。
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <strong>手番：</strong>
              プレイヤーは交互に空いているマスに自分のマークを1つ置きます。最初は&quot;X&quot;のプレイヤーから始まります。
            </Typography>
            <Typography sx={{ mb: 2 }}>
              <strong>持ち駒制限：</strong>
              各プレイヤー（&quot;X&quot;と&quot;O&quot;）は、盤上に同時に置ける自分のマークが最大3つまでという制限があります。
            </Typography>
            <Typography>
              <strong>消える駒：</strong>
              常に最新の3手分のマークだけが盤上に残ることになります。
            </Typography>
          </DialogContent>
        </Dialog>
        <Typography variant="h6" sx={{ mb: 2, color: "#000" }}>
          {status}
        </Typography>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 60px)",
            gridTemplateRows: "repeat(3, 60px)",
            gap: 1,
            mb: 2,
          }}
        >
          {squares.map((value, i) => (
            <Button
              key={i}
              variant="outlined"
              sx={{
                width: 60,
                height: 60,
                fontSize: 32,
                fontWeight: "bold",
                minWidth: 0,
                minHeight: 0,
                p: 0,
                bgcolor: "#fff",
                borderColor: "#000",
                color:
                  value === "X"
                    ? "#e53935"
                    : value === "O"
                    ? "#1976d2"
                    : "#000",
              }}
              onClick={() => handleClick(i)}
            >
              {value}
            </Button>
          ))}
        </Box>
        <Button variant="contained" onClick={handleReset} sx={{ color: "#fff", bgcolor: "#000", "&:hover": { bgcolor: "#333" } }}>
          リセット
        </Button>
      </Box>
      <Footer />
    </Box>
  );
}