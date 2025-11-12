import React from "react";
import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import styles from "./StatsCounter.module.css";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  suffix = "",
}) => {
  const [count, setCount] = React.useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  React.useEffect(() => {
    if (inView) {
      let start = 0;
      const increment = end / (duration * 60); // 60 FPS
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className={styles.counterNumber}>
      {count}
      {suffix}
    </span>
  );
};

const StatsCounter: React.FC = () => {
  const stats = [
    {
      id: 1,
      number: 10000,
      suffix: "",
      title: "RANDY OF POWERS",
      description: "Various products available",
    },
    {
      id: 2,
      number: 100,
      suffix: "",
      title: "BRANCHES",
      description: "Across the country",
    },
    {
      id: 3,
      number: 1000,
      suffix: "",
      title: "PARTNER",
      description: "Trusted partners",
    },
    {
      id: 4,
      number: 100,
      suffix: "",
      title: "AWARDS",
      description: "Industry recognition",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
  };

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <motion.div
          className={styles.statsGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              className={styles.statCard}
              variants={itemVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <div className={styles.statContent}>
                <div className={styles.numberWrapper}>
                  <Counter
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                </div>
                <h3 className={styles.statTitle}>{stat.title}</h3>
                <p className={styles.statDescription}>{stat.description}</p>
              </div>

              {/* Hover Effect Border */}
              <div className={styles.hoverBorder}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
