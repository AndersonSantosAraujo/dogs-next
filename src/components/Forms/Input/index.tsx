import styles from "./styles.module.css";

type Input = React.ComponentProps<"input"> & {
  label: string;
  error?: string;
};

export default function Input({ label, error, ...props }: Input) {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={props.name}>
        {label}
      </label>
      <input className={styles.input} type="text" id={props.name} {...props} />
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
