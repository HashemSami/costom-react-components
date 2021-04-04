import { FC, useState } from "react";
import "./DragDrop.styles.css";

type Category = "wip" | "complete";

interface Task {
  name: string;
  category: Category;
  bgcolor: string;
}

interface SortedTasks {
  wip: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[];
  complete: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >[];
}

const tasksData: Task[] = [
  { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
  { name: "React", category: "wip", bgcolor: "pink" },
  { name: "Vue", category: "complete", bgcolor: "sktblue" },
];

const DragDrop: FC = () => {
  const [tasks, setTasks] = useState(tasksData);

  const sortTasksByCategory = (tasks: Task[]) => {
    const sortedTasks: SortedTasks = {
      wip: [],
      complete: [],
    };

    const handleOnDragStart = (
      event: React.DragEvent<HTMLDivElement>,
      id: string
    ) => {
      console.log(id);
      event.dataTransfer.setData("id", id);
    };

    tasks.forEach((t) =>
      sortedTasks[t.category].push(
        <div
          key={t.name}
          draggable
          onDragStart={(e) => handleOnDragStart(e, t.name)}
          className="draggable"
          style={{ backgroundColor: t.bgcolor }}
        >
          {t.name}
        </div>
      )
    );

    return sortedTasks;
  };

  const sortedTasksByCategory = sortTasksByCategory(tasks);

  const hendleOnDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleOnDrop = (
    event: React.DragEvent<HTMLDivElement>,
    complete: Category
  ) => {
    const id = event.dataTransfer.getData("id");

    setTasks((state) =>
      state.map((t) =>
        t.name === id ? { ...t, category: complete } : { ...t }
      )
    );

    console.log(tasks);
  };

  return (
    <div className="container-drag">
      <h2 className="header">DRAG & DROP DEMO</h2>
      <div
        className="wip"
        onDrop={(e) => handleOnDrop(e, "wip")}
        onDragOver={(e) => hendleOnDragOver(e)}
      >
        <span className="task-header">Work in progress</span>
        {sortedTasksByCategory.wip}
      </div>
      <div
        className="droppable"
        onDragOver={(e) => hendleOnDragOver(e)}
        onDrop={(e) => handleOnDrop(e, "complete")}
      >
        <span className="task-header">Completed</span>
        {sortedTasksByCategory.complete}
      </div>
    </div>
  );
};
export default DragDrop;
