// src/shared/components/List.tsx
import type { ReactNode } from "react";

interface ListProps<T> {
  items: readonly T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

export default function List<T>({ items, renderItem, className }: ListProps<T>) {
  return <ul className={className}>{items.map((item, index) => renderItem(item, index))}</ul>;
}
