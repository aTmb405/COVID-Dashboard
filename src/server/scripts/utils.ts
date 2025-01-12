export const utils = {
  formatNumber: (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  formatPercent: (x: string) => {
    if (isNaN(Number(x))) {
      return x;
    }
    return (Number(x) * 100).toFixed(2) + '%';
  },

  timeout: (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
};
