import Image from 'next/image';
import styles from '@/styles/TeamCircleyout.module.css';

interface TeamCircleLayoutProps {
  centerImage: string;
  edgeImages: [string, string, string, string]; // top-left, top-right, bottom-left, bottom-right
  backgroundImage: string;
}

const TeamCircleLayout: React.FC<TeamCircleLayoutProps> = ({
  centerImage,
  edgeImages,
  backgroundImage,
}) => {
  return (
    <div className={styles.container}>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Your image bubbles */}
      <div className={styles.edge + ' ' + styles.topLeft}>
        <Image src={edgeImages[0]} alt="Top Left" fill />
      </div>
      <div className={styles.edge + ' ' + styles.topRight}>
        <Image src={edgeImages[1]} alt="Top Right" fill />
      </div>
      <div className={styles.edge + ' ' + styles.bottomLeft}>
        <Image src={edgeImages[2]} alt="Bottom Left" fill />
      </div>
      <div className={styles.edge + ' ' + styles.bottomRight}>
        <Image src={edgeImages[3]} alt="Bottom Right" fill />
      </div>
      <div className={styles.center}>
        <Image src={centerImage} alt="Center" fill />
      </div>
    </div>
  );
};

export default TeamCircleLayout;