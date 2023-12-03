import { useState } from "react";

interface UseQueueProps {
  maxSize?: number;
}

const useQueue = <T>({ maxSize = 4 }: UseQueueProps) => {
  const [queue, setQueue] = useState<T[]>([]);

  const enqueue = (element: T) => {
    if (isMax()) dequeue();

    setQueue((prev) => [element, ...prev]);
  };

  const dequeue = () => {
    if (isEmpty()) return alert("Queue is Empty!!");
    const newQueue = queue.slice();

    newQueue.pop();

    setQueue(newQueue);
  };

  const isEmpty = () => !Boolean(queue.length);

  const peek = () => queue[0];

  const isMax = () => queue.length === maxSize;

  return { queue, enqueue, dequeue, isEmpty, peek };
};

export default useQueue;
