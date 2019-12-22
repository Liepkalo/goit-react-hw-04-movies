import React from 'react';
import PropTypes from 'prop-types';
import styles from './Reviews.module.css';

const Reviews = ({ review }) => {
  return (
    <ul className={styles.page}>
      {review.map(el => (
        <li key={el.id} className={styles.char}>
          <p>Author: {el.author}</p>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};

Reviews.propTypes = {
  review: PropTypes.array.isRequired,
};

export default Reviews;
