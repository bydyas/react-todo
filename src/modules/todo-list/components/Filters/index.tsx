import React from 'react';
import { useTaskStore } from '../../stores/useTaskStore';
import styles from './styles.module.css';
import { FIlterQuery } from '../../models';

const priorityFilters = ['low', 'medium', 'high', 'all'];

export const Filters: React.FC = () => {
  const setFilterQuery = useTaskStore((state) => state.setFilterQuery);

  return (
    <div className={styles.root}>
      <h3 className={styles.heading}>Priority filter:</h3>
      <ul className={styles.list}>
        {priorityFilters.map((item) => (
          <li onClick={() => setFilterQuery(item as FIlterQuery)} className={styles.li} key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
