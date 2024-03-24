import { ReactNode } from 'react';

import clsx from 'clsx';

import styles from './index.module.scss';

const BRIEF_CONTENTS: ContentWrapperProps[] = [
  {
    title: 'Introduction',
    intro:
      'Persona 4 Golden takes place in a fictional Japanese countryside and is indirectly related to both Shin Megami Tensei: Persona 3 and the Persona 2 duology.',
  },
  {
    title: 'Features',
    intro:
      'The player-named protagonist is a high-school student who moved into the countryside from the city for a year. During his year-long stay, he becomes involved in investigating mysterious murders while harnessing the power of summoning Persona.',
    buttonLabel: 'MORE',
  },
  {
    title: 'Game System',
    intro:
      'The game is split between several modes; the most prominent is the dungeon-crawling one, which has a turn-based combat system.',
    buttonLabel: 'MORE',
  },
];

export const Brief = () => {
  return (
    <section className={styles['brief-wrapper']}>
      {BRIEF_CONTENTS.map((content, index) => (
        <ContentWrapper key={index} {...content} />
      ))}
    </section>
  );
};

type ContentWrapperProps = {
  /**
   * The title of the content.
   */
  title: string;
  /**
   * The introduction of the content.
   */
  intro: ReactNode;
  /**
   * The label of the button.
   */
  buttonLabel?: string;
  /**
   * The callback function of the button.
   */
  buttonCallback?: () => void;
};

const ContentWrapper = ({
  title,
  intro,
  buttonLabel,
  buttonCallback = () => console.log('Button clicked'),
}: ContentWrapperProps) => {
  return (
    <div className={clsx(styles['content-wrapper'])}>
      <div className={styles['text']}>
        <h3 className={styles['title']}>{title}</h3>
        <p className={styles['intro']}>{intro}</p>
        {buttonLabel && (
          <button onClick={buttonCallback} className={styles['button']}>
            {buttonLabel}
          </button>
        )}
      </div>
      <div className={styles['image']} />
    </div>
  );
};
