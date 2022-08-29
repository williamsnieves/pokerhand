export const compareDuplicates = (playerHand: string[]): boolean => {
  const noRepeated = new Set(playerHand);
  return noRepeated.size !== playerHand.length;
};
