const calculateMDD = (data) => {
  let maxDrawDown = 0;
  let curDrawDown = 0;
  let curPeak = { timestamp: '0', value: 0 };
  let curTrough = { timestamp: '0', value: undefined };

  data.reverse();

  for (let i = 0; i < data.length; i++) {
    // edge case - last el of arr.
    if (data[i + 1] !== undefined) {
      // check if cur adj close is greater
      if (data[i][11] > data[i + 1][11] && data[i][11] > curPeak.value) {
        // set new peak, reset trough (prev trough unvalid)
        curPeak = { timestamp: data[i][0], value: data[i][11] };
        curTrough = { timestamp: '0', value: undefined };
      }

      if (
        curPeak.value !== 0 && // there is a peak, so trough is possible
        data[i][11] < data[i + 1][11] && // next val is larger, so it is a tough
        curPeak.timestamp < data[i][0] // trough comes after peak
      ) {
        if (
          curTrough.value === undefined || // there is no prev trough
          (curTrough.value !== undefined && data[i][11] < curTrough.value) // prev trough is valid, but less deep
        ) {
          curTrough = { timestamp: data[i][0], value: data[i][11] };

          curDrawDown =
            ((curTrough.value - curPeak.value) / curPeak.value) * 100;

          if (maxDrawDown > curDrawDown) maxDrawDown = curDrawDown;
        }
      }
    }
  }
  return maxDrawDown.toFixed(2);
};

const calculateRoR = (data) => {
  const endDateValue = data[data.length - 1][11];
  const startDateValue = data[0][11];

  const RoR = ((endDateValue - startDateValue) / startDateValue) * 100;
  return RoR.toFixed(2);
};

module.exports = { calculateMDD, calculateRoR };
