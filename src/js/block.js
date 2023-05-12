function blockInfo(name, figure, row, col) {
    this.name = name;
    this.figure = figure;
    this.row = row;
    this.col = col;
}

function rotate(figure) {
    const n = figure.length;
    const result = [];
    for (let i = 0; i < n; i++) {
      result[i] = [];
      for (let j = 0; j < n; j++) {
        result[i][j] = figure[n - j - 1][i];
      }
    }
    return result;
  }
  