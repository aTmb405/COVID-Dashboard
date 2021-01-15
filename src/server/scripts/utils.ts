export const utils = {
  formatNumber: (x: number) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  },

  formatPercent: (x: string) => {
    return (Number(x) * 100).toFixed(2) + '%';
  },
};