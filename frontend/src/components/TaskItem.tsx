import React from "react";
import type { Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";

export interface TaskItemProps {
  task: Task;
}

//check the checked =
export function TaskItem({ task }: TaskItemProps) {
  let textContainer = styles.textContainer;
  if (task.isChecked) {
    textContainer += ` ${styles.checked}`;
  }
  return (
    <div className={styles.item}>
      <CheckButton checked={task.isChecked} />
      <div className={textContainer}>
        <span className={styles.title}>{task.title}</span>
        {task.description && <span className={styles.description}>{task.description}</span>}
      </div>
    </div>
  );
}
