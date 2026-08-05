export function removeItemFromBank(
  bankItems: string[],
  itemId: string,
): string[] {
  return bankItems.filter((bankItem) => bankItem !== itemId);
}

export function removeItemFromPlacements(
  placements: Record<string, string | null>,
  itemId: string,
): Record<string, string | null> {
  return Object.fromEntries(
    Object.entries(placements).map(([slotId, value]) => [slotId, value === itemId ? null : value]),
  );
}

export function appendItemToBank(
  bankItems: string[],
  itemId: string,
): string[] {
  return [...bankItems, itemId];
}
