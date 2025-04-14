//list hook

import { useState, useMemo } from 'react';

export const useSelection = (items: number[]) => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);

  const isAllSelected = useMemo(
    () => selectedIds.length === items.length && items.length > 0,
    [selectedIds, items]
  );

  const toggleSelect = (id: number) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    setSelectedIds(isAllSelected ? [] : items);
  };

  return { selectedIds, isAllSelected, toggleSelect, toggleSelectAll };
};