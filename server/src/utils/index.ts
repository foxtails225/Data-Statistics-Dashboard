const getAvgs = (data: Array<any>) => {
  let sum = 0;
  let res = data.map((item: any, idx: number) => {
    sum += Number(item);
    return [item, sum / (idx + 1)];
  });

  return res;
};

export { getAvgs };
